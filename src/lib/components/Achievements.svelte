<!-- Achievements.svelte -->
<script lang="ts">
	export let collegeName: string | undefined = undefined;
</script>

<section class="section">
	<h2>Recent Achievements</h2>
	<div class="achievements-grid">
		<div class="achievement-card">
			<span class="card-icon">⚾</span>
			<h3>High School Varsity</h3>
			<ul class="achievement-list">
				<li>Started Every Year of HS</li>
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
				<li>PG All-Tournament Team (x8)</li>
			</ul>
		</div>
		<div class="achievement-card">
			<span class="card-icon">📚</span>
			<h3>Academics & Character</h3>
			<ul class="achievement-list">
				<li>Episcopal School of Jacksonville</li>
				<li>4.0 GPA</li>
				<li>26 ACT Score</li>
				<li>AP Scholar with Distinction</li>
			</ul>
		</div>
	</div>
</section>

{#if collegeName}
	<section class="section">
		<h2>Why {collegeName}?</h2>
		<div class="content-grid">
			<div class="content-card">
				<span class="card-icon">🎓</span>
				<h3>Academic Excellence</h3>
				<p>
					{collegeName}'s commitment to academic excellence aligns perfectly with my 4.0 GPA and 26
					ACT score, demonstrating my dedication to both athletic and academic achievement.
				</p>
			</div>
			<div class="content-card">
				<span class="card-icon">⚾</span>
				<h3>Baseball Program</h3>
				<p>
					{collegeName}'s reputation for developing pitchers and competing at a high level makes it
					an ideal environment for my continued growth.
				</p>
			</div>
			<div class="content-card">
				<span class="card-icon">🏆</span>
				<h3>Winning Culture</h3>
				<p>
					I admire {collegeName}'s winning tradition and would be honored to contribute to your
					continued success.
				</p>
			</div>
		</div>
	</section>
{/if}

<style>
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

	.card-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		display: block;
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
</style>
