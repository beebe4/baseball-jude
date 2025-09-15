<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	export let tweetUrl: string = 'https://x.com/jude_mcdonald7/status/1957172760658026578';
	const stonyBrookBaseTwitter = 'https://x.com/StonyBrookBASE';
	let showSeawolf = true;
	const seawolfPng = '/images/stony-brook-seawolf.jpg';

	let tweetContainer: HTMLDivElement | null = null;

	function initializeTweetEmbed() {
		if (typeof window === 'undefined') return;
		// @ts-ignore - twttr is injected by widgets.js
		const twttr = (window as any).twttr;
		if (twttr && twttr.widgets && tweetContainer) {
			twttr.widgets.load(tweetContainer);
		}
	}

	onMount(() => {
		initializeTweetEmbed();
	});

	afterUpdate(() => {
		initializeTweetEmbed();
	});
</script>

<section class="section announcement">
	<div class="announcement-content">
		<div class="text">
			<h2>Exciting news!</h2>
			<p>
				Jude has committed to <strong>Stony Brook University</strong> for the 2026–2027 school year.
			</p>

			<div class="links">
				<a href={stonyBrookBaseTwitter} target="_blank" rel="noopener noreferrer" class="link">
					Visit Stony Brook Baseball on X
				</a>
			</div>
		</div>

		{#if showSeawolf}
			<div class="logo" aria-hidden="true">
				<img src={seawolfPng} alt="" on:error={() => (showSeawolf = false)} />
			</div>
		{/if}

		<div class="tweet" bind:this={tweetContainer}>
			<blockquote class="twitter-tweet" data-theme="light">
				<a href={tweetUrl}><span class="sr-only">View Jude's commitment announcement on X</span></a>
			</blockquote>
		</div>
	</div>
</section>

<style>
	.announcement {
		background: white;
		padding: 2rem;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin: 2rem 0;
	}

	.announcement-content {
		display: grid;
		grid-template-columns: 1fr 280px;
		grid-template-areas:
			'text logo'
			'tweet tweet';
		gap: 2rem;
		align-items: center;
	}

	.text h2 {
		margin: 0 0 0.5rem 0;
	}

	.links {
		margin-top: 1rem;
	}

	.link {
		color: var(--link);
		text-decoration: none;
		font-weight: 500;
	}

	.link:hover {
		color: var(--accent);
		text-decoration: underline;
	}

	.logo {
		grid-area: logo;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo img {
		width: clamp(180px, 22vw, 280px);
		height: auto;
		aspect-ratio: 1 / 1;
		border-radius: 8px;
	}

	.tweet {
		grid-area: tweet;
		overflow: hidden;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (max-width: 768px) {
		.announcement-content {
			grid-template-columns: 1fr;
			grid-template-areas:
				'text'
				'logo'
				'tweet';
		}
	}
</style>
