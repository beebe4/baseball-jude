<script>
	import Hero from '$lib/components/Hero.svelte';
	import CommitmentAnnouncement from '$lib/components/CommitmentAnnouncement.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import PerfectGameProfile from '$lib/components/PerfectGameProfile.svelte';
	import VideoHighlights from '$lib/components/VideoHighlights.svelte';
	import Achievements from '$lib/components/Achievements.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
</script>

<Hero />
<main class="container">
	<div class="top-grid single">
		<CommitmentAnnouncement />
	</div>

	<Stats />
	<Schedule />
	<VideoHighlights />
	<PerfectGameProfile />
	<Achievements />

	<section class="section profiles-section">
		<h2>More Information</h2>
		<div class="profiles-grid">
			<a
				href="https://www.perfectgame.org/Players/Playerprofile.aspx?ID=773222"
				target="_blank"
				rel="noopener noreferrer"
				class="profile-card"
			>
				<img src="/images/perfect-game-logo.png" alt="Perfect Game Logo" />
				<h3>Perfect Game Profile</h3>
				<p>View my complete stats and rankings</p>
			</a>
			<a
				href="https://x.com/jude_mcdonald7"
				target="_blank"
				rel="noopener noreferrer"
				class="profile-card"
			>
				<img src="/images/twitter-x-logo.png" alt="Twitter Logo" />
				<h3>Twitter/X</h3>
				<p>Follow my journey and updates</p>
			</a>
		</div>
	</section>
</main>

<style>
	.top-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		align-items: start;
		margin-top: 1rem;
	}

	@media (max-width: 900px) {
		.top-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}

	.profiles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.profile-card {
		background: white;
		padding: 1.5rem;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
		text-decoration: none;
		color: var(--fg-1);
		transition: transform 0.2s;
	}

	.profile-card:hover {
		transform: translateY(-5px);
	}

	.profile-card img {
		width: 60px;
		height: 60px;
		margin-bottom: 1rem;
	}

	@media (max-width: 768px) {
		.profile-card {
			margin-bottom: 1rem;
		}
	}
</style>
