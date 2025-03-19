import { useQuery } from '@tanstack/react-query';

import { fetchProjects } from './api';

export function useProjects() {
	return useQuery({
		queryKey: ['projects'],
		queryFn: fetchProjects,
		staleTime: 1000 * 60 * 60,
		gcTime: 1000 * 60 * 60
	});
}
