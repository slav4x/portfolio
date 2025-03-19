import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.sass';

import { ButtonTelegram } from '@/components';

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul>
					<li>
						<Link href="/" className={styles.hand}>
							<Image src="/img/hand.png" width={16} height={16} unoptimized alt="" />
						</Link>
					</li>
					<li>
						<Link href="/">Проекты</Link>
					</li>
					<li>
						<Link href="/">Обо мне</Link>
					</li>
					<li>
						<Link href="/">Прайс</Link>
					</li>
					<li>
						<Link href="/">Журнал</Link>
					</li>
				</ul>
			</nav>
			<ButtonTelegram size="sm" />
		</header>
	);
}
