import { NextRequest, NextResponse } from 'next/server';

import { projects } from '@/data/projects';
import { Project } from '@/types';

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;

	const project: Project | undefined = projects.find((p) => p.slug === slug);

	if (!project) {
		return NextResponse.json({ error: 'Project not found' }, { status: 404 });
	}

	return NextResponse.json(project);
}
