<script>
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectAnalytics();
	injectSpeedInsights();
</script>

<svelte:head>
	<title>Jude McDonald - Baseball Class of 2026</title>

	<!-- Base OpenGraph tags (updated for commitment announcement) -->
	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content="Jude McDonald Baseball" />
	<meta
		property="og:title"
		content="Committed: Jude McDonald → Stony Brook University (2026–2027)"
	/>
	<meta property="og:url" content="https://judebaseball.com" />
	<meta property="og:image" content="https://judebaseball.com/images/jude-pitching-og.jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:description"
		content="Exciting news: Jude has committed to Stony Brook University! Explore his profile, schedule, highlights, and contact info."
	/>
	<meta property="og:logo" content="https://judebaseball.com/favicon.svg" />

	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@jude_mcdonald7" />
	<meta name="twitter:title" content="Committed: Jude McDonald → Stony Brook University" />
	<meta
		name="twitter:description"
		content="Exciting news: Jude has committed to Stony Brook University! Explore his profile and highlights."
	/>
	<meta name="twitter:image" content="https://judebaseball.com/images/jude-pitching-square.jpeg" />

	<!-- Favicon and manifest -->
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="#7bb8b1" />
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<slot />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
