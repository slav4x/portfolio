import { ProjectPage } from '@/components';
import { fetchProject } from '@/hooks/api';

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function ProjectSingle({ params }: PageProps) {
	const { slug } = await params;
	if (!slug) return <p>Ошибка: Отсутствует slug</p>;

	const project = await fetchProject(slug);
	return <ProjectPage project={project} />;
}
