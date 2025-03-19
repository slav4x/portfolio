import Link from 'next/link';
import { motion } from 'framer-motion';

import { Project } from '@/types';

import styles from './ProjectItem.module.sass';

interface ProjectItemProps {
	project: Project;
	onMouseEnter: (e: React.MouseEvent<HTMLLIElement>) => void;
	onMouseLeave: () => void;
}

const cardVariants = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0 }
};

export default function ProjectItem({ project, onMouseEnter, onMouseLeave }: ProjectItemProps) {
	const { id, year, href, title, assetsNumber, tags, thumbnails } = project;

	const maxThumbnailsToShow = assetsNumber === 6 ? 6 : 5;
	const displayedThumbnails = thumbnails.slice(0, maxThumbnailsToShow);
	const remainingAssets = assetsNumber > 6 ? assetsNumber - 5 : 0;

	return (
		<motion.li
			key={id}
			className={styles.item}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			variants={cardVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<Link href={href} prefetch={true}>
				<div className={styles.wrapper}>
					<div className={styles.name}>
						<span className={styles.date}>{year}</span>
						<span>{title}</span>
					</div>
					<ul className={styles.tags}>
						{tags.map((tag) => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
					<ul className={styles.thumbnails}>
						{displayedThumbnails.map((image, idx) => (
							<li key={idx} className={styles.thumbnailsItem}>
								<img src={image} loading="lazy" alt="" />
							</li>
						))}
						{remainingAssets > 0 && <li className={styles.thumbnailsItem}>+{remainingAssets}</li>}
					</ul>
				</div>
			</Link>
		</motion.li>
	);
}
