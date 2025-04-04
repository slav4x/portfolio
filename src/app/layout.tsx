import '@/styles/normalize.sass';
import '@/styles/global.sass';

import localFont from 'next/font/local';

import { Header } from '@/components';

import Providers from './_providers';

const baseFont = localFont({
	src: [{ path: '../assets/fonts/PPNeueMontreal-Medium.woff2', weight: '500', style: 'normal' }],
	display: 'swap',
	variable: '--font-base'
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={baseFont.variable}>
				<div className="layout">
					<Header />
					<div className="main">
						<Providers>{children}</Providers>
					</div>
				</div>
			</body>
		</html>
	);
}
