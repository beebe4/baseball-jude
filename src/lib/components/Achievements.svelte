<section class="section">
	<h2>Recent Achievements</h2>
	<div class="achievements-grid">
		<div class="achievement-card">
			<span class="card-icon">⚾</span>
			<h3>High School Varsity</h3>
			<ul class="achievement-list">
				<li>Started Every Year of HS</li>
				<li>2nd Most Innings Pitched (10th & 11th)</li>
				<li>2024 District Runner-Up</li>
				<li>Regional Qualifier '24 & '25</li>
			</ul>
		</div>
		<div class="achievement-card">
			<span class="card-icon">🏆</span>
			<h3>Travel Ball</h3>
			<ul class="achievement-list">
				<li>CBU Scout Team - 2026</li>
				<li>Top 10 Team in the Nation</li>
				<li>PG All-Tournament Team (x9)</li>
			</ul>
		</div>
		<div class="achievement-card">
			<span class="card-icon">📚</span>
			<h3>Academic Excellence</h3>
			<ul class="achievement-list">
				<li>4.04 Weighted GPA</li>
				<li>Honor Roll Student</li>
				<li>7 AP Classes</li>
			</ul>
		</div>
	</div>
</section>

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
</style>
