import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from '../components/Header';

export default function Layout(props) {
	const { meta = {} } = props;
	const title = meta.title || 'Person Finder';
	const description = meta.description || 'The Best Person Search Tool';

	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<link rel="canonical" href={'/'} />
				
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="title" content={title} />
				<meta name="description" content={description} />
				<meta name="keywords" content={'search, person search'} />

				{/*OG*/}
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:site_name" content={'PersonFinder'} />
				<meta property="og:image" content={'/logo.svg'} />
				<meta property="og:url" content={'/'} />
			</Head>
			<main className="container">
				<Header />
				<div className="container content-container">{props.children}</div>
			</main>
		</Fragment>
	);
}
