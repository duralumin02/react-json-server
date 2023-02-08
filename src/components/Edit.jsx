import { useEffect, useState } from 'react';
import { AiFillPhone, AiOutlineUser } from 'react-icons/ai';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const { id } = useParams();
	const navgigate = useNavigate();

	const getSingleContact = async () => {
		const { data } = await axios.get(`http://localhost:3000/contacts/${id}`);
		setName(data.name);
		setEmail(data.email);
		setPhone(data.phone);
	};

	const updateNewContact = async (updateContact) => {
		await axios.patch(`http://localhost:3000/contacts/${id}`, updateContact);
		navgigate('/');
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const updateContact = { name, email, phone };
		updateNewContact(updateContact);
	};

	useEffect(() => {
		getSingleContact();
	}, []);
	return (
		<div>
			<form onSubmit={onSubmitHandler} className="border p-5 mt-10 mx-auto w-96 rounded shadow-md">
				<h1 className="text-xl text-gray-800 font-bold text-left">Edit Contact</h1>
				{/* User name */}
				<div>
					<label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						User Name
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<AiOutlineUser className="text-gray-300" />
						</div>
						<input
							onChange={(e) => setName(e.target.value)}
							defaultValue={name}
							type="text"
							id="email-address-icon"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter your name"
						/>
					</div>
				</div>
				{/* Email */}
				<div>
					<label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Your Email
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
							</svg>
						</div>
						<input
							onChange={(e) => setEmail(e.target.value)}
							defaultValue={email}
							type="text"
							id="email-address-icon"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="exampleName@gmail.com"
						/>
					</div>
				</div>
				{/* Phone Number */}
				<div>
					<label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Phone Number
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<AiFillPhone className="text-gray-300" />
						</div>
						<input
							onChange={(e) => setPhone(e.target.value)}
							defaultValue={phone}
							type="text"
							id="email-address-icon"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="09-xxxxxxxx"
						/>
					</div>
				</div>
				<div className="mt-4 flex gap-4">
					<button className="py-2 px-4 text-gray-300 bg-green-600 rounded-md" type="submit">
						Update
					</button>
					<Link to={'/'}>
						<button className="py-2 px-4 text-gray-300 bg-red-600 rounded-md">Cancel</button>
					</Link>
				</div>
			</form>
		</div>
	);
};
export default Edit;
