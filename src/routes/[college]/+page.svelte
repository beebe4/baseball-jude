<script lang="ts">
	import { page } from '$app/stores';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { CollegeService } from '$lib/services/collegeService';

	const urlCollege = $page.params.college;
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
			// Fallback to basic formatting
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

	// Update the baseballStats object with actual pitching stats
	const baseballStats = {
		physical: {
			height: '6\'3"',
			weight: '190 lbs',
			position: 'RHP, OF',
			class: '2026'
		},
		batting: {
			avg: '.344',
			obp: '.417',
			slg: '.469',
			ops: '.886',
			hits: 11,
			rbi: 10,
			doubles: 4
		},
		pitching: {
			// Current season (23-24) stats
			current: {
				era: '2.84',
				record: '4-1',
				winPct: '.800',
				ip: '37.0',
				so: '27',
				whip: '1.32', // (35H + 14BB) / 37IP
				hits: '35',
				runs: '28',
				er: '15',
				bb: '14',
				avg: '.245', // Opponent batting average
				obp: '.337'
			},
			// Career varsity stats
			career: {
				era: '3.52',
				record: '4-2',
				winPct: '.667',
				ip: '47.2',
				so: '34',
				whip: '1.51', // (52H + 20BB) / 47.2IP
				hits: '52',
				runs: '39',
				er: '24',
				bb: '20'
			},
			velocity: '84-86 mph',
			topVelo: '87 mph',
			pitches: ['4-Seam FB', '2-Seam FB', 'Changeup', 'Curveball']
		}
	};

	const videoHighlights = {
		pitching: 'https://www.youtube.com/embed/YOUR_PITCHING_VIDEO_ID',
		batting: 'https://www.youtube.com/embed/YOUR_BATTING_VIDEO_ID',
		fielding: 'https://www.youtube.com/embed/YOUR_FIELDING_VIDEO_ID'
	};
</script>

<svelte:head>
	<title>{collegeName} Baseball - Jude McDonald</title>
</svelte:head>

<div class="hero">
	<div class="hero-content">
		<div class="hero-grid">
			<div class="hero-text">
				<div class="college-branding">
					<img src={logo} alt="{collegeName} logo" class="college-logo" />
					<h1>Hey {collegeName}!</h1>
				</div>
				<p class="intro-text">
					I'm Jude McDonald, a 6'3" right-handed pitcher from Jacksonville, Florida. With an 87 mph
					fastball and a 3.9 GPA, I'm excited about the possibility of contributing to your program
					both on the field and in the classroom.
				</p>
			</div>
			<div class="hero-image">
				<img src="/images/jude-pitching.jpeg" alt="Jude McDonald pitching" class="player-image" />
			</div>
		</div>
	</div>
</div>

<main class="container">
	<section class="section">
		<h2>Player Profile</h2>
		<div class="stats-grid">
			<div class="stat-card">
				<h3>Physical</h3>
				<ul class="stat-list">
					<li>Height: {baseballStats.physical.height}</li>
					<li>Weight: {baseballStats.physical.weight}</li>
					<li>Position: {baseballStats.physical.position}</li>
					<li>Class: {baseballStats.physical.class}</li>
				</ul>
			</div>
			<div class="stat-card">
				<h3>2024 HS Stats</h3>
				<ul class="stat-list">
					<li>
						Record: {baseballStats.pitching.current.record} ({baseballStats.pitching.current
							.winPct})
					</li>
					<li>ERA: {baseballStats.pitching.current.era}</li>
					<li>IP: {baseballStats.pitching.current.ip}</li>
					<li>SO: {baseballStats.pitching.current.so}</li>
					<li>WHIP: {baseballStats.pitching.current.whip}</li>
					<li>OPP AVG: {baseballStats.pitching.current.avg}</li>
				</ul>
			</div>
			<div class="stat-card">
				<h3>Arsenal</h3>
				<ul class="stat-list">
					<li>Fastball: {baseballStats.pitching.velocity}</li>
					<li>Top Velocity: {baseballStats.pitching.topVelo}</li>
					<li>Pitches: {baseballStats.pitching.pitches.join(', ')}</li>
				</ul>
			</div>
			<div class="stat-card">
				<h3>Hitting</h3>
				<ul class="stat-list">
					<li>AVG: {baseballStats.batting.avg}</li>
					<li>OBP: {baseballStats.batting.obp}</li>
					<li>SLG: {baseballStats.batting.slg}</li>
					<li>OPS: {baseballStats.batting.ops}</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="section video-section">
		<h2>Highlights</h2>
		<div class="video-grid">
			<div class="video-card">
				<h3>Pitching Highlights</h3>
				<div class="video-wrapper">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video controls preload="metadata">
						<source src="/videos/Jude-86.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div class="video-details">
					<p>Featuring: 87mph Fastball, Curveball, Changeup</p>
					<p>Spring 2024</p>
				</div>
			</div>

			<div class="video-card">
				<h3>Game Footage</h3>
				<div class="video-wrapper">
					<iframe
						src={videoHighlights.batting}
						title="Game Highlights"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div class="video-details">
					<p>Complete game highlights vs. rival team</p>
					<p>March 2024</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Why {collegeName}?</h2>
		<div class="content-grid">
			<div class="content-card">
				<span class="card-icon">🎓</span>
				<h3>Academic Excellence</h3>
				<p>
					Your institution's commitment to academic excellence aligns perfectly with my 3.9 GPA and
					dedication to both athletic and academic achievement.
				</p>
			</div>
			<div class="content-card">
				<span class="card-icon">⚾</span>
				<h3>Baseball Program</h3>
				<p>
					Your program's reputation for developing pitchers and competing at a high level makes it
					an ideal environment for my continued growth.
				</p>
			</div>
			<div class="content-card">
				<span class="card-icon">🏆</span>
				<h3>Winning Culture</h3>
				<p>
					I admire your program's winning tradition and would be honored to contribute to your
					continued success.
				</p>
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Recent Achievements</h2>
		<div class="achievements-grid">
			<div class="achievement-card">
				<span class="card-icon">⚾</span>
				<h3>High School Varsity</h3>
				<ul class="achievement-list">
					<li>Started on Varsity as Freshman</li>
					<li>2nd Most Innings Pitched (Sophomore)</li>
					<li>2024 District Runner-Up</li>
				</ul>
			</div>
			<div class="achievement-card">
				<span class="card-icon">🏆</span>
				<h3>Travel Ball</h3>
				<ul class="achievement-list">
					<li>CBU Scout Team - 2026</li>
					<li>Top 10 Team in the Nation</li>
					<li>Perfect Game Participant</li>
				</ul>
			</div>
			<div class="achievement-card">
				<span class="card-icon">📚</span>
				<h3>Academics & Character</h3>
				<ul class="achievement-list">
					<li>3.9 GPA</li>
					<li>AP Scholar with Distinction</li>
					<li>Episcopal School of Jacksonville</li>
				</ul>
			</div>
		</div>
	</section>
	<!-- 
	<section class="section contact-section">
		<h2>Let's Connect</h2>
		<p class="contact-intro">
			I'd love to discuss how I could contribute to your program. Please feel free to reach out!
		</p>
		<ContactForm />
	</section> -->
</main>

<style>
	.hero {
		background-color: var(--accent);
		color: white;
		padding: 4rem 2rem;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero-text {
		text-align: left;
	}

	.college-branding {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.college-logo {
		max-width: 80px;
		height: auto;
		background: white;
		padding: 0.5rem;
		border-radius: var(--border-radius);
	}

	.player-image {
		width: 100%;
		max-width: 500px;
		height: auto;
		border-radius: var(--border-radius);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	.intro-text {
		font-size: 1.2rem;
		max-width: 600px;
		margin: 1rem auto;
		line-height: 1.6;
	}

	.content-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.content-card {
		background: white;
		padding: 2rem;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	.card-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		display: block;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.stat-card {
		background: white;
		padding: 1.5rem;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	.contact-section {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.contact-intro {
		margin-bottom: 2rem;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
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

		.player-image {
			margin: 0 auto;
		}

		.video-grid {
			grid-template-columns: 1fr;
		}
	}

	.stat-list {
		list-style: none;
		padding: 0;
		margin: 0;
		text-align: left;
	}

	.stat-list li {
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--bg-2);
	}

	.stat-list li:last-child {
		border-bottom: none;
	}

	.achievements-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.achievement-list {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0 0;
		text-align: left;
	}

	.achievement-list li {
		padding: 0.5rem 0;
		position: relative;
		padding-left: 1.5rem;
	}

	.achievement-list li:before {
		content: '▹';
		position: absolute;
		left: 0;
		color: var(--accent);
	}

	.video-section {
		background-color: var(--bg-2);
		padding: 4rem 2rem;
	}

	.video-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.video-card {
		background: white;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.video-wrapper {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
		height: 0;
		overflow: hidden;
	}

	.video-wrapper video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.video-details {
		padding: 1rem;
	}
</style>
