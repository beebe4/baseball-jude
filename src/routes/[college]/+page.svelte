<script lang="ts">
	import { page } from '$app/stores';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { CollegeService } from '$lib/services/collegeService';
	import axios from 'axios';

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
</script>

<svelte:head>
	<title>{collegeName} Baseball - Jude McDonald</title>
</svelte:head>

<div class="hero">
	<div class="hero-content">
		<div class="college-info">
			<img src={logo} alt="{collegeName} logo" class="college-logo" />
			<h1>Hey {collegeName}!</h1>
			<p class="intro-text">
				I'm excited about the possibility of contributing to your baseball program. As a 6'3"
				right-handed pitcher with a strong academic record, I believe I could be a valuable addition
				to your team.
			</p>
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

	<section class="section contact-section">
		<h2>Let's Connect</h2>
		<p class="contact-intro">
			I'd love to discuss how I could contribute to your program. Please feel free to reach out!
		</p>
		<ContactForm />
	</section>
</main>

<style>
	.hero {
		background-color: var(--accent);
		color: white;
		padding: 4rem 2rem;
		text-align: center;
	}

	.hero-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.college-logo {
		max-width: 150px;
		height: auto;
		margin-bottom: 1.5rem;
		border-radius: var(--border-radius);
		background: white;
		padding: 0.5rem;
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
	}

	.contact-intro {
		margin-bottom: 2rem;
	}

	@media (max-width: 768px) {
		.hero {
			padding: 2rem 1rem;
		}

		.content-grid {
			grid-template-columns: 1fr;
		}

		.stats-grid {
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
</style>
