import { NextResponse } from 'next/server';
import { projects } from '@/data/projects';
import { Project } from '@/types';

export async function GET() {
	const projectList: Pick<Project, 'id' | 'title' | 'year' | 'href' | 'tags' | 'thumbnails' | 'assetsNumber'>[] =
		projects.map(({ id, title, year, href, tags, thumbnails, assetsNumber }) => ({
			id,
			title,
			year,
			href,
			tags,
			thumbnails,
			assetsNumber
		}));

	return NextResponse.json(projectList);
}
