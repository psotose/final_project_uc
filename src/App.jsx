import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar/Navbar";
import Main from "./components/pages/Main/Main";
import Characters from "./components/pages/CharactersDetails/CharactersDetails";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/final_project_usach" exact element={<Main />} />
					<Route path="/Characters" element={<Characters />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
