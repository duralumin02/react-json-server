import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {
	const [contacts, setContacts] = useState();

	const getContacts = async () => {
		const { data } = await axios.get('http://localhost:3000/contacts');
		setContacts(() => data);
	};
	const swalWithButtons = Swal.mixin({
		customClass: {
			confirmButton: 'bg-green-600 text-white px-4 py-1 shadow-lg rounded',
			cancelButton: 'bg-red-600 text-white px-4 py-1 shadow-lg mr-3 rounded',
		},
		buttonsStyling: false,
	});

	const apiDeleteContact = async (id) => {
		swalWithButtons
			.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!',
				cancelButtonText: 'No, cancel!',
				reverseButtons: true,
			})
			.then(async (result) => {
				if (result.isConfirmed) {
					swalWithButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
					const data = await axios.delete(`http://localhost:3000/contacts/${id}`);
					getContacts();
				} else if (result.dismiss === Swal.DismissReason.cancel) {
					swalWithButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
				}
			});
	};

	useEffect(() => {
		getContacts();
	}, []);

	useEffect(() => {
		getContacts();
	}, [contacts]);

	return (
		<div>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
								NAME
							</th>
							<th scope="col" className="px-6 py-3">
								EMAIL ADDRESS
							</th>
							<th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
								PHONE NUMBER
							</th>
							<th scope="col" className="px-6 py-3">
								ACTION
							</th>
						</tr>
					</thead>
					<tbody>
						{contacts?.map((contact, index) => (
							<tr className="border-b border-gray-200 dark:border-gray-700" key={index}>
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
									{contact.name}
								</th>
								<td className="px-6 py-4">{contact.email}</td>
								<td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{contact.phone}</td>
								<td className="px-6 py-4 flex gap-3 text-xl">
									<Link to={`/edit/${contact.id}`}>
										<AiOutlineEdit className=" text-teal-600 cursor-pointer" />
									</Link>
									<AiOutlineDelete onClick={() => apiDeleteContact(contact.id)} className=" text-red-600 cursor-pointer" />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default Contact;
