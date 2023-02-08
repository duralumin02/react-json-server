import { Link } from 'react-router-dom';
import Contact from './Contact';
import Create from './Create';

const navbar = () => {
	return (
		<div>
			<ul className="flex gap-4">
				<Link to="/" element={<Contact />} className=" bg-gray-800 text-white px-4 py-2 rounded-md">
					Contacts
				</Link>
				<Link to="/create" element={<Create />} className=" bg-gray-800 text-white px-4 py-2 rounded-md">
					Create New Conatact
				</Link>
			</ul>
		</div>
	);
};
export default navbar;
