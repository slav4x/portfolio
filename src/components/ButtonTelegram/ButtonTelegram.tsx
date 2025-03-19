import Link from 'next/link';
import Image from 'next/image';

import styles from './ButtonTelegram.module.sass';

interface ButtonTelegramProps {
	size?: 'sm' | 'default';
	style?: 'gray' | 'default';
}

export default function ButtonTelegram({ size = 'default', style = 'default' }: ButtonTelegramProps) {
	return (
		<Link
			href="https://t.me/chupagraper"
			target="_blank"
			className={`${styles.button} ${style === 'gray' ? styles.gray : ''}`}
		>
			<Image
				src="/img/telegram.png"
				width={size === 'sm' ? 20 : 24}
				height={size === 'sm' ? 20 : 24}
				unoptimized
				alt=""
			/>
			Связаться
		</Link>
	);
}
