import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchProjects } from '@/hooks/api';
import { ProjectsList } from '@/components';

import styles from './Projects.module.sass';

export default async function Projects() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 60,
				gcTime: 1000 * 60 * 60
			}
		}
	});
	await queryClient.prefetchQuery({
		queryKey: ['projects'],
		queryFn: fetchProjects
	});

	return (
		<section className={styles.projects}>
			<div className="container">
				<div className="text">
					<h2 className="title">Проекты</h2>
					<p>
						Верстка должна не только выглядеть хорошо, но и работать правильно — быть быстрой, адаптивной и без лишнего
						мусора в коде
					</p>
				</div>
				<HydrationBoundary state={dehydrate(queryClient)}>
					<ProjectsList />
				</HydrationBoundary>
			</div>
		</section>
	);
}
