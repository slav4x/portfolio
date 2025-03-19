const API_URL =
	process.env.NODE_ENV === 'production' ? 'https://portfolio-seven-dusky-62.vercel.app' : 'http://localhost:3000';

export async function fetchProjects() {
	const res = await fetch(`${API_URL}/api/projects`);
	if (!res.ok) throw new Error('Ошибка загрузки проектов');
	return res.json();
}

export async function fetchProject(slug: string) {
	const res = await fetch(`${API_URL}/api/project/${slug}`, {
		cache: 'force-cache'
	});
	if (!res.ok) throw new Error('Проект не найден');
	return res.json();
}
