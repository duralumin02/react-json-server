import './App.css';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Contact from './components/Contact';
import Edit from './components/Edit';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Contact />}>
					Contact
				</Route>
				<Route path="/create" element={<Create />}>
					Create
				</Route>
				<Route path="/edit/:id" element={<Edit />}>
					Edit
				</Route>
			</Routes>
		</div>
	);
}

export default App;
