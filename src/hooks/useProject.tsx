import { useQuery } from '@tanstack/react-query';
import { fetchProject } from './api';
import { Project } from '@/types';
import { useQueryClient } from '@tanstack/react-query';

export function useProject(slug: string) {
	const queryClient = useQueryClient();

	return useQuery<Project>({
		queryKey: ['project', slug],
		queryFn: () => fetchProject(slug),
		enabled: !!slug,
		staleTime: 1000 * 60 * 5,
		initialData: () => {
			const projects = queryClient.getQueryData<Project[]>(['projects']);
			return projects?.find((p) => p.slug === slug);
		}
	});
}
