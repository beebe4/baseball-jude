<script lang="ts">
	import { page } from '$app/stores';
	import Hero from '$lib/components/Hero.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import VideoHighlights from '$lib/components/VideoHighlights.svelte';
	import Achievements from '$lib/components/Achievements.svelte';
	import { CollegeService } from '$lib/services/collegeService';

	export const prerender = 'auto';

	const urlCollege = $page.params.slug;
	let logo = '/images/default-college.png'; // Default logo
	let collegeName = '';

	// Initialize college name and fetch logo
	async function initializeCollege() {
		try {
			const collegeInfo = await CollegeService.lookupCollege(urlCollege);
			if (collegeInfo) {
				collegeName = collegeInfo.name;
				if (collegeInfo.logo) {
					logo = collegeInfo.logo;
				}
			}
		} catch (error) {
			console.error('Error initializing college:', error);
			// Fallback to basic formatting of the URL slug
			collegeName = urlCollege
				.split(/[-_]/)
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
				.join(' ');
		}
	}

	// Initialize on page load
	$: {
		initializeCollege();
	}
</script>

<svelte:head>
	<title>Jude McDonald - {collegeName || 'College Profile'}</title>
	<meta
		property="og:title"
		content="Baseball Recruiting Profile - Jude McDonald for {collegeName}"
	/>
	<meta
		property="og:description"
		content="6'3&quot; RHP with 89.7mph fastball, 4.0 GPA, and 26 ACT interested in {collegeName}'s baseball program. Class of 2026 from Jacksonville, FL."
	/>
	<meta property="og:image" content="/images/jude-pitching.jpeg" />
	<meta property="og:type" content="profile" />
	<meta property="og:url" content={$page.url.href} />
</svelte:head>

<Hero {collegeName} {logo} />

<main class="container">
	<Stats />
	<VideoHighlights />
	<Achievements {collegeName} />

	<section class="section contact-section">
		<h2>Let's Connect</h2>
		<div class="contact-content">
			<p>
				I'm excited about the possibility of joining {collegeName}'s baseball program. I'd love to
				discuss how I can contribute to your team's success.
			</p>
			<div class="contact-buttons">
				<a href="mailto:nick@cbubaseball.com" class="contact-button primary">Email Coach</a>
				<a href="tel:+19042542672 " class="contact-button secondary">Call Coach</a>
			</div>
		</div>
	</section>
</main>

<style>
	.contact-section {
		background: white;
		padding: 2rem;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
		margin: 2rem 0;
	}

	.contact-content {
		max-width: 600px;
		margin: 0 auto;
	}

	.contact-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 2rem;
	}

	.contact-button {
		padding: 0.8rem 1.5rem;
		border-radius: var(--border-radius);
		font-weight: bold;
		text-decoration: none;
		transition: transform 0.2s;
	}

	.contact-button:hover {
		transform: translateY(-2px);
	}

	.primary {
		background-color: var(--accent);
		color: white;
	}

	.secondary {
		background-color: transparent;
		border: 2px solid var(--accent);
		color: var(--accent);
	}

	@media (max-width: 768px) {
		.contact-buttons {
			flex-direction: column;
			align-items: center;
		}

		.contact-button {
			width: 100%;
			max-width: 300px;
			text-align: center;
		}
	}
</style>
