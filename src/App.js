import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExperiencePage from './pages/ExperiencePage';
import HomePage from './pages/HomePage';
import LearningPage from './pages/LearningPage';
import NavBar from './components/NavBar';
import ProjectsPage from './pages/ProjectsPage';

function App() {
	return (
		<div>
			<Router>
				<div>
					<NavBar />
				</div>
				<Routes>
					<Route
						exact
						path="/"
						element={<HomePage />}
					></Route>
					<Route
						exact
						path="/experience"
						element={<ExperiencePage />}
					></Route>
					<Route
						exact
						path="/learning"
						element={<LearningPage />}
					></Route>
					<Route
						exact
						path="/projects"
						element={<ProjectsPage />}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
