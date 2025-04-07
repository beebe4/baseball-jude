<script>
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { page } from '$app/stores';
	injectAnalytics();
</script>

<svelte:head>
	<title>Jude McDonald - Baseball Class of 2026</title>

	<!-- Base OpenGraph tags -->
	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content="Jude McDonald Baseball" />
	<meta property="og:title" content="Jude McDonald - RHP - Class of 2026" />
	<meta property="og:url" content="https://judebaseball.com" />
	<meta property="og:image" content="https://judebaseball.com/images/jude-pitching-og.jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:description"
		content="2026 6'3&quot; RHP from Jacksonville, FL. Combines power, precision, and academic excellence with a 4.0 GPA."
	/>
	<meta property="og:logo" content="https://judebaseball.com/favicon.svg" />

	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@jude_mcdonald7" />
	<meta name="twitter:title" content="Jude McDonald - RHP - Class of 2026" />
	<meta
		name="twitter:description"
		content="2026 6'3&quot; RHP from Jacksonville, FL. Combines power, precision, and academic excellence with a 4.0 GPA."
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
