import Table from '../components/Table';

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
			title: 'Lead Web Developer',
			company: 'Stamps.com',
			date: 'April 2020 - October 2021'
		},
		{
			title: 'Senior Web Developer',
			company: 'Stamps.com',
			date: 'April 2019 - March 2020'
		},
		{
			title: 'Web Development Manager',
			company: 'Stamps.com',
			date: 'May 2014 - March 2019'
		},
		{
			title: 'Senior Web Developer',
			company: 'Stamps.com',
			date: 'February 2012 - May 2014'
		},
		{
			title: 'Web Developer',
			company: 'Stamps.com',
			date: 'February 2008 - February 2012'
		}
	];

	const keyFn = (job) => {
		return job.title;
	};

	return (
		<div>
			<h1>Professional Experience</h1>
			<Table
				config={config}
				data={data}
				keyFn={keyFn}
			/>

			<h2>Languages</h2>
			<p>HTML, CSS, SCSS, JavaScript, TypeScript</p>

			<h2>Frameworks &amp; Libraries</h2>
			<p>Angular, PrimeNg, Bootstrap, jQuery, JavaScriptMVC</p>

			<h2>Software & Tools</h2>
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
