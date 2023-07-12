import Heading from '../components/heading/Heading';
import Table from '../components/table/Table';

function ExperiencePage() {
	const config = [
		{ label: 'Title', render: (job) => job.title },
		{
			label: 'Company',
			render: (job) => job.company
		},
		{
			label: 'Date',
			render: (job) => job.date
		}
	];

	const data = [
		{
			id: 1,
			company: 'Stamps.com',
			date: 'April 2020 - October 2021',
			title: 'Lead Web Developer'
		},
		{
			id: 2,
			company: 'Stamps.com',
			date: 'April 2019 - March 2020',
			title: 'Senior Web Developer'
		},
		{
			id: 3,
			company: 'Stamps.com',
			date: 'May 2014 - March 2019',
			title: 'Web Development Manager'
		},
		{
			id: 4,
			company: 'Stamps.com',
			date: 'February 2012 - May 2014',
			title: 'Senior Web Developer'
		},
		{
			id: 5,
			company: 'Stamps.com',
			date: 'February 2008 - February 2012',
			title: 'Web Developer'
		}
	];

	const headerId = 'experience-header';

	const keyFn = (job) => {
		return job.id;
	};

	return (
		<div>
			<Heading
				id={headerId}
				level="h1"
			>
				Professional Experience
			</Heading>
			<Table
				ariaLabelledBy={headerId}
				config={config}
				data={data}
				keyFn={keyFn}
			/>

			<Heading level="h2">Languages</Heading>
			<p>HTML, CSS, SCSS, JavaScript, TypeScript</p>

			<Heading level="h2">Frameworks &amp; Libraries</Heading>
			<p>Angular, PrimeNg, Bootstrap, jQuery, JavaScriptMVC</p>

			<Heading level="h2">Software & Tools</Heading>
			<p>
				Amazon Web Services, Microsoft Azure, Adobe Analytics, Adobe
				Target, Adobe Launch, Google Analytics, Git, Perforce, Gulp,
				NPM, Splunk, Oracle Service Cloud, Adobe Photoshop, Adobe XD,
				Zeplin, Imperva, Jira, Confluence, Slack
			</p>
		</div>
	);
}

export default ExperiencePage;
