import { useState } from 'react';
import imageCertDsu from '../assets/cert_dsu_20230825.png';
import Heading from '../components/heading/Heading';
import Modal from '../components/modal/Modal';
import Table from '../components/table/Table';

function LearningPage() {
	const [showModal, setShowModal] = useState({
		show: false,
		imagePath: null
	});

	const handleClick = (event) => {
		event.preventDefault();

		setShowModal({
			show: true,
			imagePath: event.currentTarget.href
		});
	};

	const handleClose = () => {
		setShowModal({ show: false, imagePath: null });
	};

	const modal = (
		<Modal onClose={handleClose}>
			<img
				alt="Course verification certificate"
				src={showModal.imagePath}
			/>
		</Modal>
	);

	const config = [
		{
			label: 'Name',
			render: (course) => (
				<a
					href={course.url}
					rel="noreferrer"
					target="_blank"
				>
					<span
						aria-hidden="true"
						data-content={course.title}
					></span>
					{course.title}
				</a>
			)
		},
		{ label: 'Presenter', render: (course) => course.presenter },
		{ label: 'Platform', render: (course) => course.platform },
		{ label: 'Event Type', render: (course) => course.type },
		{
			label: 'Date',
			render: (course) =>
				course.verification_url ? (
					<a
						href={course.verification_url}
						onClick={course.verification_modal && handleClick}
						rel="noreferrer"
						target="_blank"
					>
						<span
							aria-hidden="true"
							data-content={course.date_completed}
						></span>
						{course.date_completed}
					</a>
				) : (
					course.date_completed
				)
		}
	];

	const data = [
		{
			date_completed: 'In Progress',
			url: 'https://www.pluralsight.com/cloud-guru/courses/aws-certified-solutions-architect-associate-saa-c03',
			platform: 'A Cloud Guru',
			presenter: 'Ryan Kroonenburg',
			title: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
			type: 'Online Course'
		},
		{
			date_completed: 'August 2023',
			url: 'https://designsystem.university/courses/how-to-use-a-design-system-in-code',
			platform: 'Design System University',
			presenter: 'Dan Mall',
			title: 'How to Use a Design System in Code',
			type: 'Online Course',
			verification_modal: true,
			verification_url: imageCertDsu
		},
		{
			date_completed: 'August 2023',
			url: 'https://www.udemy.com/course/react-redux/',
			platform: 'Udemy',
			presenter: 'Stephen Grider',
			title: 'Modern React with Redux [2023 Update]',
			type: 'Online Course',
			verification_url:
				'https://www.udemy.com/certificate/UC-fcf70991-1028-4ac6-85f3-22dec55039fc/'
		},
		{
			date_completed: 'April 2022',
			url: 'https://www.pluralsight.com/courses/react-redux-react-router-es6',
			platform: 'Pluralsight',
			presenter: 'Cory House',
			title: 'Building Applications with React 17 and Redux',
			type: 'Online Course',
			verification_url:
				'https://app.pluralsight.com/achievements/share/ec6a1db3-1d9b-48d9-9198-a35ead321afe'
		},
		{
			date_completed: 'March 2022',
			url: 'https://www.pluralsight.com/courses/react-flux-building-applications',
			platform: 'Pluralsight',
			presenter: 'Cory House',
			title: 'Building Applications with React 16 and Flux 3',
			type: 'Online Course',
			verification_url:
				'https://app.pluralsight.com/achievements/share/fc90dd16-8f20-4dc3-b2de-3ab3e2098472'
		},
		{
			date_completed: 'March 2022',
			url: 'https://www.pluralsight.com/courses/react-big-picture',
			platform: 'Pluralsight',
			presenter: 'Cory House',
			title: 'React: The Big Picture',
			type: 'Online Course',
			verification_url:
				'https://app.pluralsight.com/achievements/share/15243a26-9e86-4ce4-bea4-41f3fe72a037'
		},
		{
			date_completed: 'October 2020',
			url: 'https://aneventapart.com/news/post/resources-from-fall-summit',
			platform: 'An Event Apart',
			presenter: 'Multiple',
			title: 'An Event Apart Fall Summit 2020',
			type: 'Conference'
		},
		{
			date_completed: 'May 2020',
			url: 'https://smashingconf.com/online-workshops/workshops/design-systems-brad-frost/',
			platform: 'Smashing Magazine',
			presenter: 'Brad Frost',
			title: 'Creating & Maintaining Successful Design Systems',
			type: 'Workshop'
		},
		{
			date_completed: 'May 2019',
			url: 'https://learn.acloud.guru/course/aws-certification-preparation/overview',
			platform: 'A Cloud Guru',
			presenter: 'Mattias Andersson',
			title: 'AWS Certification Preparation Guide',
			type: 'Online Course',
			verification_url: 'https://verify.acloud.guru/75DFABBF9584'
		},
		{
			date_completed: 'April 2019',
			url: 'https://learn.acloud.guru/course/coding-for-cloud-101/overview',
			platform: 'A Cloud Guru',
			presenter: 'Robin Norwood',
			title: 'Coding for Cloud 101',
			type: 'Online Course',
			verification_url: 'https://verify.acloud.guru/9C9E9B620FCB'
		},
		{
			date_completed: 'April 2019',
			url: 'https://learn.acloud.guru/course/intro-cloud-computing/overview',
			platform: 'A Cloud Guru',
			presenter: 'Ryan Kroonenburg',
			title: 'Introduction to Cloud Computing',
			type: 'Online Course',
			verification_url: 'https://verify.acloud.guru/1DB8F72701C7'
		}
	];

	const headerId = 'learning-header';

	const keyFn = (event) => {
		return event.title;
	};

	return (
		<div>
			<Heading
				id={headerId}
				level="h1"
			>
				Recent Conferences, Courses, and Workshops
			</Heading>
			<Table
				ariaLabelledBy={headerId}
				config={config}
				data={data}
				keyFn={keyFn}
			/>
			{showModal.show && modal}
		</div>
	);
}

export default LearningPage;
