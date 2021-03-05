import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from '../components/Header';

export default function Layout(props) {
	const { meta={}  } =props;
	return (
		<Fragment>
			<Head>
				<title>{meta.title || 'Person Finder'}</title>
			</Head>
			<main >
				<Header/>
				<div className='container'>
					{props.children}
				</div>
			</main>
		</Fragment>
	);
}
