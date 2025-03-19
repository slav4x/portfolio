import Link from 'next/link';

import { Tags } from '@/components';
import { Project } from '@/types';

import styles from './ProjectPage.module.sass';

interface ProjectPageProps {
	project: Project;
}

export default function ProjectPageContent({ project }: ProjectPageProps) {
	if (!project) return <p>Ошибка загрузки</p>;

	return (
		<>
			<section className={styles.info}>
				<div className="container">
					<div className={styles.head}>
						<h2 className={styles.title}>
							<span>{project?.year}</span> {project?.title}
						</h2>
						<ul className={styles.tags}>
							{project?.tags.map((tag: string) => (
								<li key={tag}>{tag}</li>
							))}
						</ul>
					</div>
					<div className={styles.row}>
						<div className="text">
							<p>{project?.description}</p>
							<p className="text-link">
								<Link href={`https://${project?.link}/`}>
									<span>{project?.link}</span>
								</Link>
							</p>
						</div>
						<div className={styles.stack}>
							<Tags data={project?.stack} />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.gallery}>
				<div className="container">
					<ul className={styles.grid}>
						{project?.images?.map((image: string, idx: number) => (
							<li key={idx}>
								<img src={image} alt="" />
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}
