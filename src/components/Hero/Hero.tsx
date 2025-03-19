import Image from 'next/image';

import { Button, ButtonTelegram } from '@/components';

import styles from './Hero.module.sass';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className="container">
				<div className={styles.content}>
					<h1 className={styles.title}>
						<span>
							<Image src="/img/me.png" width={72} height={48} unoptimized alt="" />
							Вячеслав Хрипушин
						</span>
						Фронтенд-разработчик с фокусом на верстке, 10+ лет опыта
					</h1>
					<div className={styles.buttons}>
						<Button href="/" text="Посмотреть проекты" />
						<ButtonTelegram style="gray" />
					</div>
				</div>
			</div>
		</section>
	);
}
