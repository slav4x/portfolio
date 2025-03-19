import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchProject } from '@/hooks/api';
import { ProjectPage } from '@/components';

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function ProjectSingle({ params }: PageProps) {
	const { slug } = await params;

	if (!slug) {
		return <p>Ошибка: Отсутствует slug</p>;
	}

	const queryClient = new QueryClient();

	await queryClient.fetchQuery({
		queryKey: ['project', slug],
		queryFn: () => fetchProject(slug)
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ProjectPage slug={slug} />
		</HydrationBoundary>
	);
}
