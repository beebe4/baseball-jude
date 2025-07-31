<!-- Schedule.svelte -->
<script lang="ts">
	// Summer tournament schedule data
	export const tournamentSchedule = [
		{
			date: 'May 23-26 2025',
			event: '2025 PG East Memorial Day Classic',
			location: 'Ft. Myers, FL',
			url: 'https://www.perfectgame.org/Events/Default.aspx?event=101191'
		},
		{
			date: 'June 5-9 2025',
			event: '2025 PG Beast of the East Invitational',
			location: 'Atlanta, GA',
			url: 'https://www.perfectgame.org/Events/Default.aspx?event=99738'
		},
		{
			date: 'June 18-22 2025',
			event: '2025 Black Bear Classic',
			location: 'Greenville, SC',
			url: 'https://play.ps-baseball.com/public/events/black-bear-classic-greenville-sc-06-18-2025'
		},
		{
			date: 'June 25- July 2 2025',
			event: '2025 PG WWBA National Championship 17u',
			location: 'Atlanta, GA',
			url: 'https://www.perfectgame.org/Events/Default.aspx?event=99734'
		},
		{
			date: 'July 24-28 2025',
			event: '2025 PG BCS National Championship',
			location: 'Ft. Myers, FL',
			url: 'https://www.perfectgame.org/Events/Default.aspx?event=99747'
		},
		{
			date: 'July 30 2025',
			event: 'North to South Academic Showcase',
			location: 'University of Richmond',
			url: 'https://www.spiderbaseballcamps.com/north-to-south-academic-prospect-camp-ii.cfm'
		},
		{
			date: 'August 9 2025',
			event: 'CBU College Camp',
			location: 'Ft. Myers, FL',
			url: 'https://x.com/CBU_FL/status/1949883474053390688'
		}
	];

	// Coach information
	export const coachInfo = {
		summerBall: {
			team: 'CBU 2026 Scout Team Stofsky',
			coach: 'Wayne Stofsky',
			phone: '954-658-5319'
		},
		highSchool: {
			coach: 'Nick James',
			phone: '904-254-2672'
		}
	};
</script>

<section class="section schedule-section">
	<h2>2025 Summer Schedule</h2>

	<div class="coach-info">
		<div class="team-header">
			<div class="team-info">
				<p><strong>{coachInfo.summerBall.team}</strong></p>
				<p>Summer Ball Head Coach: {coachInfo.summerBall.coach} {coachInfo.summerBall.phone}</p>
				<p>High School Head Coach: {coachInfo.highSchool.coach} {coachInfo.highSchool.phone}</p>
			</div>
			<div class="team-logo">
				<img src="/images/cbu-logo.png" alt="CBU Logo" />
			</div>
		</div>
	</div>

	<div class="schedule-container">
		<table class="schedule-table">
			<thead>
				<tr>
					<th>Dates</th>
					<th>Tournament</th>
					<th>Location</th>
				</tr>
			</thead>
			<tbody>
				{#each tournamentSchedule as tournament}
					<tr>
						<td>{tournament.date}</td>
						<td>
							<a
								href={tournament.url}
								target="_blank"
								rel="noopener noreferrer"
								class="tournament-link"
							>
								{tournament.event}
							</a>
						</td>
						<td>{tournament.location}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	.schedule-section {
		margin: 2rem 0;
	}

	.coach-info {
		background: white;
		padding: 1.5rem;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.coach-info p {
		margin: 0.5rem 0;
	}

	.schedule-container {
		overflow-x: auto;
	}

	.schedule-table {
		width: 100%;
		border-collapse: collapse;
		background: white;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.schedule-table th,
	.schedule-table td {
		padding: 1rem;
		text-align: left;
		border-bottom: 1px solid var(--bg-2);
	}

	.schedule-table th {
		background-color: var(--accent);
		color: white;
		font-weight: bold;
	}

	.schedule-table tr:last-child td {
		border-bottom: none;
	}

	.schedule-table tr:hover {
		background-color: var(--bg-2);
	}

	@media (max-width: 768px) {
		.schedule-table th,
		.schedule-table td {
			padding: 0.75rem;
		}
	}

	.team-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.team-info {
		flex: 1;
		min-width: 250px;
		text-align: left;
	}

	.team-logo {
		flex: 0 0 auto;
		margin-left: 1rem;
	}

	.team-logo img {
		max-width: 150px;
		height: auto;
	}

	@media (max-width: 768px) {
		.team-header {
			flex-direction: column;
		}

		.team-info {
			text-align: center;
			margin-bottom: 1rem;
		}

		.team-logo {
			margin-left: 0;
		}
	}

	.tournament-link {
		color: var(--link);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s;
	}

	.tournament-link:hover {
		color: var(--accent);
		text-decoration: underline;
	}
</style>
