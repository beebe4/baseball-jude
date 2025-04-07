<!-- Hero.svelte -->
<script lang="ts">
	import { track } from '@vercel/analytics/sveltekit';
	export let collegeName: string | undefined = undefined;
	export let logo: string | undefined = undefined;

	function handleHighlightsClick() {
		track('Navigation', {
			action: 'Watch Highlights Click',
			from: collegeName ? `College Page - ${collegeName}` : 'Home Page'
		});
	}
</script>

<div class="hero min-h-screen" class:college={!!collegeName}>
	<div class="hero-content">
		<div class="hero-grid">
			<div class="hero-text">
				{#if collegeName && logo}
					<div class="college-content">
						<div class="college-branding">
							<div class="logo-container">
								<img src={logo} alt="{collegeName} logo" class="college-logo" />
							</div>
							<h1>Hey {collegeName}!</h1>
						</div>
						<div class="text-container">
							<p class="intro-text">
								I'm Jude McDonald, a 6'3" right-handed pitcher from Jacksonville, Florida. With an
								89 mph fastball and a 4.0 GPA, I'm excited about the possibility of contributing to
								your program both on the field and in the classroom.
							</p>
						</div>
					</div>
				{:else}
					<h1 class="text-5xl font-bold">Jude McDonald</h1>
					<h2 class="text-2xl font-bold">Baseball - RHP - Class of 2026</h2>
					<h3 class="text-xl font-bold">CBU Scout Team & Episcopal School of Jacksonville</h3>
					<div class="text-container">
						<p class="py-6">
							A 6'3" right-handed pitcher from Jacksonville, Florida. With an 89 mph fastball and a
							4.0 GPA.
							<br />
							<br />
							"I'm excited about the possibility of contributing to your program both on the field and
							in the classroom."
						</p>
					</div>
					<div class="cta-buttons">
						<a href="#highlights" class="cta-button primary" on:click={handleHighlightsClick}
							>Watch Highlights</a
						>
					</div>
				{/if}
			</div>
			<div class="hero-image">
				<img
					src="/images/jude-pitching.jpeg"
					class="max-w-sm rounded-lg shadow-2xl"
					alt="Jude McDonald pitching"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.hero {
		background: linear-gradient(var(--bg-1), var(--bg-2));
		color: var(--fg-1);
		padding: 6rem 0;
		margin-bottom: 2rem;
	}

	.hero.college {
		background-color: var(--accent);
		color: white;
		padding: 4rem 2rem;
		position: relative;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		z-index: 2;
	}

	.hero-text {
		text-align: left;
	}

	.college-content {
		background: rgba(0, 0, 0, 0.5);
		padding: 2rem;
		border-radius: var(--border-radius);
		backdrop-filter: blur(5px);
	}

	.college-branding {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.logo-container {
		background: white;
		padding: 0.5rem;
		border-radius: var(--border-radius);
		width: 80px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.college-logo {
		max-width: 100%;
		height: auto;
		object-fit: contain;
	}

	.text-container {
		background: rgba(0, 0, 0, 0.3);
		padding: 1.5rem;
		border-radius: var(--border-radius);
		margin-top: 1rem;
		backdrop-filter: blur(5px);
	}

	.intro-text {
		font-size: 1.2rem;
		max-width: 600px;
		margin: 0;
		line-height: 1.6;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: flex-start;
		margin-top: 2rem;
	}

	.cta-button {
		padding: 0.8rem 1.5rem;
		border-radius: var(--border-radius);
		font-weight: bold;
		text-decoration: none;
		transition: transform 0.2s;
	}

	.cta-button:hover {
		transform: translateY(-2px);
	}

	.primary {
		background-color: var(--accent);
		color: white;
	}

	.hero-image img {
		width: 100%;
		max-width: 500px;
		height: auto;
		border-radius: var(--border-radius);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		margin: 0 auto;
		display: block;
	}

	@media (max-width: 768px) {
		.hero-grid {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.hero-text {
			text-align: center;
		}

		.college-branding {
			flex-direction: column;
			text-align: center;
		}

		.cta-buttons {
			justify-content: center;
		}

		.hero h1 {
			font-size: 2.5rem;
		}

		.hero h2 {
			font-size: 1.5rem;
		}
	}
</style>
