import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ExpenseTrackerForm from './components/ExpenseTrackerForm';
import ShowList from './components/ShowList';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path='/add' element={<ExpenseTrackerForm onClose={() => { }} />}></Route>
					<Route path='/' element={< ShowList />}></Route>
				</Routes>
			</Router>
		</div >
	);
}

export default App;
