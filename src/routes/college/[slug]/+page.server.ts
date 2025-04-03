import type { PageServerLoad } from './$types';
import { CollegeService } from '$lib/services/collegeService';

export const prerender = false; // Disable prerendering for dynamic routes

export const load: PageServerLoad = async ({ params }) => {
	const collegeInfo = await CollegeService.lookupCollege(params.slug);
	return {
		college: collegeInfo || {
			name: params.slug
				.split(/[-_]/)
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
				.join(' '),
			logo: '/images/default-college.png'
		}
	};
};
