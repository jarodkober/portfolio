import Table from '../components/Table';

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
		}
	];

	const data = [
		{
			name: 'Portfolio',
			repository_url: 'https://github.com/jarodkober/portfolio',
			url: 'http://jarodkober.com'
		}
	];

	const keyFn = (project) => {
		return project.name;
	};
	return (
		<div>
			<h1>Projects</h1>
			<Table
				config={config}
				data={data}
				keyFn={keyFn}
			/>
		</div>
	);
}

export default ProjectsPage;
