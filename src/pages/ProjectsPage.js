import Heading from '../components/heading/Heading';
import Table from '../components/table/Table';

function ProjectsPage() {
	const config = [
		{ label: 'Name', render: (project) => project.name },
		{
			label: 'URL',
			render: (project) =>
				project.url ? (
					<a
						href={project.url}
						rel="noreferrer"
						target="_blank"
					>
						<span
							aria-hidden="true"
							data-content={project.url}
						></span>
						{project.url}
					</a>
				) : (
					'TBD'
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
					<span
						aria-hidden="true"
						data-content="Github"
					></span>
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
			tech: 'React, JavaScript, SASS, AWS',
			url: 'https://jarodkober.com'
		},
		{
			name: 'Beer Inventory',
			repository_url: 'https://github.com/jarodkober/beer',
			tech: 'React, Redux, Redux Toolkit Query, Vite, PrimeReact, JavaScript'
		}
	];

	const headerId = 'projects-header';

	const keyFn = (project) => {
		return project.name;
	};

	return (
		<div>
			<Heading
				id={headerId}
				level="h1"
			>
				Personal Projects
			</Heading>
			<Table
				ariaLabelledBy={headerId}
				config={config}
				data={data}
				keyFn={keyFn}
			/>
		</div>
	);
}

export default ProjectsPage;
