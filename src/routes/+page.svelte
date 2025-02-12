<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Jude McDonald - Baseball Class of 2026</title>
	<meta property="og:title" content="Jude McDonald - Baseball Class of 2026" />
	<meta property="og:type" content="profile" />
	<meta property="og:url" content="https://judebaseball.com" />
	<meta property="og:image" content="https://judebaseball.com/images/jude-pitching.jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:description"
		content="Right-handed pitcher (Class of 2026) at Episcopal School of Jacksonville. 6'3&quot; pitcher combining power, precision, and academic excellence with a 3.9 GPA."
	/>
	<meta property="og:site_name" content="Jude McDonald Baseball" />

	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@jude_mcdonald7" />
	<meta name="twitter:title" content="Jude McDonald - Baseball Class of 2026" />
	<meta
		name="twitter:description"
		content="Right-handed pitcher (Class of 2026) at Episcopal School of Jacksonville. 6'3&quot; pitcher combining power, precision, and academic excellence with a 3.9 GPA."
	/>
	<meta name="twitter:image" content="https://judebaseball.com/images/jude-pitching.jpeg" />
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<img
			src="/images/jude-pitching.jpeg"
			class="max-w-sm rounded-lg shadow-2xl"
			alt="Jude McDonald pitching"
		/>
		<div>
			<h1 class="text-5xl font-bold">Jude McDonald</h1>
			<h2 class="text-2xl font-bold">Baseball - Class of 2026</h2>
			<h3 class="text-xl font-bold">Episcopal School of Jacksonville</h3>
			<p class="py-6">Dedicated athlete combining power, precision, and academic excellence</p>
			<div class="cta-buttons">
				<a href="#highlights" class="cta-button primary">Watch Me In Action</a>
				<!-- <a href="#contact" class="cta-button secondary">Contact Me</a> -->
			</div>
		</div>
	</div>
</div>

<main class="container">
	<section id="introduction" class="section introduction">
		<h2>My Story</h2>
		<div class="introduction-content">
			<p>
				As a junior right-handed pitcher, I'm actively seeking opportunities to continue my baseball
				career at the collegiate level. I'm drawn to competitive programs that can help me realize
				my full potential while competing at the highest levels.
			</p>

			<p>
				My commitment to excellence extends beyond personal achievements – I aim to elevate any
				program I join by:
			</p>
			<ul>
				<li>Competing with intensity on every pitch</li>
				<li>Supporting coaching staff in achieving program goals</li>
				<li>Contributing to a winning culture both on and off the field</li>
			</ul>

			<p>
				While baseball is my passion, I understand the importance of academic excellence. I'm
				seeking a strong academic community that will prepare me for success in life, regardless of
				where my baseball journey leads. This balanced approach to athletics and academics reflects
				my commitment to long-term success.
			</p>
		</div>
	</section>

	<section id="stats" class="section stats-grid">
		<div class="stat-card">
			<h3>Position</h3>
			<p class="stat-value">RHP, OF</p>
		</div>
		<div class="stat-card">
			<h3>Height</h3>
			<p class="stat-value">6'3"</p>
		</div>
		<div class="stat-card">
			<h3>Weight</h3>
			<p class="stat-value">190 lbs</p>
		</div>
		<div class="stat-card">
			<h3>Bats/Throws</h3>
			<p class="stat-value">R/R</p>
		</div>
	</section>

	<section id="achievements" class="section">
		<h2>Key Achievements</h2>
		<div class="achievements-grid">
			<div class="achievement-card">
				<span class="achievement-icon">🏆</span>
				<h3>Travel Ball</h3>
				<p>CBU Scout Team - 2026</p>
				<p>Top 10 Team in the Nation</p>
			</div>
			<div class="achievement-card">
				<span class="achievement-icon">⚾</span>
				<h3>High School Baseball</h3>
				<p>Varsity Starter as Freshman</p>
				<p>2nd most innings pitched as Sophmore</p>
				<p>2024 District Runner-Up</p>
			</div>
			<div class="achievement-card">
				<span class="achievement-icon">📚</span>
				<h3>Academic Excellence</h3>
				<p>3.9 GPA</p>
				<p>AP Scholar with Distinction</p>
			</div>
		</div>
	</section>

	<section id="highlights" class="section">
		<h2>Game Highlights</h2>
		<div class="video-container">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video controls preload="metadata" class="highlight-video">
				<source src="/videos/Jude-86.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	</section>

	<section class="section profiles-section">
		<h2>Professional Profiles</h2>
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

	<!-- <section id="contact" class="section" style="display: flex; justify-content: center;">
		<ContactForm />
	</section> -->
</main>

<style>
	.hero {
		background: linear-gradient(var(--bg-1), var(--bg-2));
		color: var(--fg-1);
		padding: 6rem 0;
		margin-bottom: 2rem;
	}

	.hero-content {
		text-align: center;
	}

	.hero h1 {
		font-size: 3.5rem;
		margin-bottom: 0.5rem;
	}

	.hero h2 {
		font-size: 1.8rem;
		font-weight: normal;
		margin-bottom: 1rem;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
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

	/* .secondary {
		background-color: transparent;
		border: 2px solid var(--fg-1);
		color: var(--fg-1);
	} */

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.stat-card {
		background: white;
		padding: 1.5rem;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	.stat-value {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--accent);
	}

	.achievements-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.achievement-card {
		background: white;
		padding: 2rem;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	.achievement-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		display: block;
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
		.hero h1 {
			font-size: 2.5rem;
		}

		.hero h2 {
			font-size: 1.5rem;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

		.cta-button {
			width: 100%;
			max-width: 300px;
			text-align: center;
		}
	}

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

	.introduction-content ul {
		list-style-type: disc;
		margin-left: 2rem;
		margin-bottom: 1.5rem;
	}

	.introduction-content li {
		margin-bottom: 0.5rem;
	}

	.video-container {
		display: flex;
		justify-content: center;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}

	.highlight-video {
		width: 100%;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
