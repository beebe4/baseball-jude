<!-- Stats.svelte -->
<script lang="ts">
	export const baseballStats = {
		physical: {
			height: '6\'3"',
			weight: '190 lbs',
			position: 'RHP, OF'
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
			current: {
				era: '1.117',
				ip: '31.1',
				so: '43',
				whip: '0.798',
				hits: '16',
				runs: '10',
				er: '5',
				bb: '9',
				baa: '.145'
			},
			career: {
				era: '1.117',
				ip: '31.1',
				so: '43',
				whip: '0.810',
				hits: '17',
				runs: '10',
				er: '5',
				bb: '10'
			},
			velocity: '86-89 mph',
			topVelo: '89.7 mph',
			pitches: ['2-Seam Fastball', 'Changeup', 'Slider']
		}
	};
</script>

<section class="section">
	<h2>Player Profile</h2>
	<div class="stats-grid">
		<div class="stat-card">
			<h3>Physical</h3>
			<ul class="stat-list">
				<li>Height: {baseballStats.physical.height}</li>
				<li>Weight: {baseballStats.physical.weight}</li>
				<li>Position: {baseballStats.physical.position}</li>
			</ul>
		</div>
		<div class="stat-card">
			<h3>2025 HS Stats</h3>
			<ul class="stat-list">
				<li>ERA: {baseballStats.pitching.current.era}</li>
				<li>IP: {baseballStats.pitching.current.ip}</li>
				<li>SO: {baseballStats.pitching.current.so}</li>
				<li>WHIP: {baseballStats.pitching.current.whip}</li>
				<li>OPP AVG: {baseballStats.pitching.current.baa}</li>
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

<style>
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
</style>
