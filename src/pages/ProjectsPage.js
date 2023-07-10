import Table from '../components/Table';
import { BsList, BsXLg } from 'react-icons/bs';

function ProjectsPage() {
	const config = [
		{ label: 'Name', render: (project) => project.name },
		{
			label: 'URL',
			render: (project) => (
				<a
					href={project.url}
					rel="noreferrer"
					target="_blank"
				>
					{project.url}
				</a>
			)
		},
		{
			label: 'Repository',
			render: (project) => (
				<a
					href={project.repository_url}
					rel="noreferrer"
					target="_blank"
				>
					Github
				</a>
			)
		},
		{ label: 'Technology', render: (project) => project.tech }
	];

	const data = [
		{
			name: 'Portfolio',
			repository_url: 'https://github.com/jarodkober/portfolio',
			tech: 'React, JavaScript, AWS',
			url: 'http://jarodkober.com'
		}
	];

	const headerId = 'projects-header';

	const keyFn = (project) => {
		return project.name;
	};

	return (
		<div>
			<h1 id={headerId}>Personal Projects</h1>
			<Table
				ariaLabelledBy={headerId}
				config={config}
				data={data}
				keyFn={keyFn}
			/>
			<BsXLg />
			<BsList />
		</div>
	);
}

export default ProjectsPage;
