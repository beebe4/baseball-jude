<script>
	import Hero from '$lib/components/Hero.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import VideoHighlights from '$lib/components/VideoHighlights.svelte';
	import Achievements from '$lib/components/Achievements.svelte';
</script>

<Hero />
<main class="container">
	<section id="introduction" class="section introduction">
		<h2>My Story</h2>
		<div class="introduction-content">
			<p>
				Hey, I'm Jude McDonald, a right-handed pitcher graduating from high school in 2026. I'm
				looking for the right college program to continue my academic and baseball career.
			</p>

			<p>
				I'm focused on finding a competitive program where I can develop, compete at a high level,
				and be part of a winning culture. Beyond the game, I'm committed to my development as both a
				player and a student. I want to be part of a program that pushes me to get better every
				day—on the field, in the weight room, and in the classroom.
			</p>

			<p>
				I appreciate you taking the time to check out my page. If you think I'd be a good fit for
				your program, I'd love to connect.
			</p>
		</div>
	</section>

	<Stats />
	<VideoHighlights />
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
	.introduction {
		background: white;
		padding: 2rem;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin: 2rem 0;
	}

	.introduction-content {
		max-width: 800px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.introduction-content p {
		margin-bottom: 1.5rem;
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
