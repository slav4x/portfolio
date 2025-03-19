'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { ProjectItem } from '@/components';
import { useProjects } from '@/hooks/useProjects';
import { Project } from '@/types';

import styles from './ProjectsList.module.sass';

export default function ProjectsList() {
	const { data: projects } = useProjects();

	const containerRef = useRef<HTMLDivElement>(null);

	const [bgAnimation, setBgAnimation] = useState({ x: 0, y: 0, opacity: 0 });

	const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
		const itemRect = e.currentTarget.getBoundingClientRect();
		const containerRect = containerRef.current!.getBoundingClientRect();

		setBgAnimation({
			x: itemRect.left - containerRect.left,
			y: itemRect.top - containerRect.top,
			opacity: 0.5
		});
	};

	const handleMouseLeave = () => {
		setBgAnimation((prev) => ({ ...prev, opacity: 0 }));
	};

	return (
		<div className={styles.listWrapper} ref={containerRef}>
			<motion.div
				className={styles.background}
				animate={bgAnimation}
				initial={{ opacity: 0 }}
				transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
			/>
			<ul>
				{projects?.map((project: Project) => (
					<ProjectItem
						key={project.id}
						project={project}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					/>
				))}
			</ul>
		</div>
	);
}
