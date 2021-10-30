import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
	return (
		<div className='p-5 mb-4 bg-light rounded-3'>
			<h1>Pluralsight Administration</h1>
			<p>React, Redux and React Router for ultra-responsive web apps.</p>
			<Link to='about' className='btn btn-primary btn-lg'>
				Learn more
			</Link>
		</div>
	);
}
