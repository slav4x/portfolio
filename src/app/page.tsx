import type { Metadata } from 'next';

import { About, Hero, Projects } from '@/components';

export const metadata: Metadata = {
	title: 'Вячеслав Хрипушин',
	description: 'Фронтенд-разработчик с фокусом на верстке, 10+ лет опыта'
};

export default function Home() {
	return (
		<>
			<Hero />
			<Projects />
			<About />
		</>
	);
}
