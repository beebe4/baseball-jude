<!-- PerfectGameProfile.svelte -->
<script lang="ts">
	export const perfectGameData = {
		name: 'JUDE MCDONALD',
		positions: 'RHP 1B, OF',
		physical: '6-3 195 R/R',
		awards: {
			title: 'ALL TOURNAMENT TEAM',
			subtitle: 'All Tournament Team (Pitching)',
			certificate: 'Certificate | List'
		},
		pitching: {
			fastball: {
				velocity: '89',
				range: '87-89',
				type: 'FB'
			},
			slider: {
				velocity: '77',
				type: 'SL'
			},
			changeup: {
				velocity: '85',
				type: 'CH'
			}
		}
	};
</script>

<section class="section perfect-game-section">
	<h2>Results from Most Recent Perfect Game Outing</h2>
	<div class="perfect-game-card">
		<div class="header">
			<div class="logo-section">
				<img src="/images/perfect-game-logo.png" alt="Perfect Game Logo" class="pg-logo" />
				<span class="pg-text">PERFECT GAME</span>
			</div>
			<a
				href="https://www.perfectgame.org/Players/Playerprofile.aspx?ID=773222"
				target="_blank"
				rel="noopener noreferrer"
				class="view-profile-btn"
			>
				View Full Profile
			</a>
		</div>

		<div class="player-info">
			<h2 class="player-name">{perfectGameData.name}</h2>
			<p class="player-details">{perfectGameData.positions} {perfectGameData.physical}</p>
		</div>

		<div class="awards-section">
			<div class="award-item">
				<span class="trophy-icon">🏆</span>
				<div class="award-text">
					<h3 class="award-title">{perfectGameData.awards.title}</h3>
					<p class="award-subtitle">{perfectGameData.awards.subtitle}</p>
				</div>
			</div>
		</div>

		<div class="velocity-section">
			<div class="velocity-display">
				<div class="main-velocity">
					<span class="velocity-number">{perfectGameData.pitching.fastball.velocity}</span>
					<span class="velocity-unit">mph</span>
				</div>
				<span class="pitch-type">{perfectGameData.pitching.fastball.type}</span>
			</div>

			<div class="velocity-range">
				<div class="range-display">
					<span class="velocity-number">{perfectGameData.pitching.fastball.range}</span>
					<span class="velocity-unit">mph</span>
				</div>
				<span class="pitch-type">{perfectGameData.pitching.fastball.type} RANGE</span>
			</div>

			<div class="secondary-pitches">
				<div class="pitch-item">
					<span class="velocity-number">{perfectGameData.pitching.slider.velocity}</span>
					<span class="velocity-unit">mph</span>
					<span class="pitch-type">{perfectGameData.pitching.slider.type}</span>
				</div>
				<div class="pitch-item">
					<span class="velocity-number">{perfectGameData.pitching.changeup.velocity}</span>
					<span class="velocity-unit">mph</span>
					<span class="pitch-type">{perfectGameData.pitching.changeup.type}</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.perfect-game-section {
		margin: 2rem 0;
	}

	.perfect-game-card {
		background: white;
		border-radius: var(--border-radius);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 1.5rem;
		max-width: 500px;
		margin: 0 auto;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
		padding-bottom: 0.75rem;
		border-bottom: 2px solid var(--bg-2);
	}

	.logo-section {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.pg-logo {
		width: 40px;
		height: 40px;
	}

	.pg-text {
		font-weight: bold;
		font-size: 1.1rem;
		color: var(--fg-1);
	}

	.view-profile-btn {
		background: var(--accent);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: var(--border-radius);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
		transition: background-color 0.2s;
	}

	.view-profile-btn:hover {
		background: #d32f2f;
	}

	.player-info {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.player-name {
		font-size: 2rem;
		font-weight: bold;
		margin: 0 0 0.5rem 0;
		color: var(--fg-1);
	}

	.player-details {
		font-size: 1.1rem;
		color: var(--fg-2);
		margin: 0;
	}

	.awards-section {
		margin-bottom: 1.5rem;
		padding: 0.75rem;
		background: #fff5f5;
		border-radius: var(--border-radius);
		border-left: 4px solid var(--accent);
	}

	.award-item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.trophy-icon {
		font-size: 1.5rem;
	}

	.award-text {
		flex: 1;
	}

	.award-title {
		color: var(--accent);
		font-weight: bold;
		font-size: 1.1rem;
		margin: 0 0 0.25rem 0;
	}

	.award-subtitle {
		color: var(--fg-1);
		margin: 0;
		font-size: 0.9rem;
	}

	.velocity-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.velocity-display {
		text-align: center;
		padding: 0.75rem;
		background: var(--bg-2);
		border-radius: var(--border-radius);
	}

	.main-velocity {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: 0.25rem;
		margin-bottom: 0.5rem;
	}

	.velocity-number {
		font-size: 3rem;
		font-weight: bold;
		color: var(--fg-1);
	}

	.velocity-unit {
		font-size: 1rem;
		color: var(--fg-2);
	}

	.pitch-type {
		font-size: 0.9rem;
		color: var(--fg-2);
		font-weight: 500;
	}

	.velocity-range {
		text-align: center;
		padding: 0.75rem;
		background: var(--bg-2);
		border-radius: var(--border-radius);
	}

	.range-display {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: 0.25rem;
		margin-bottom: 0.5rem;
	}

	.secondary-pitches {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.pitch-item {
		text-align: center;
		padding: 0.75rem;
		background: var(--bg-2);
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.pitch-item .velocity-number {
		font-size: 2rem;
	}

	.pitch-item .velocity-unit {
		font-size: 0.8rem;
	}

	.pitch-item .pitch-type {
		font-size: 0.8rem;
	}

	@media (max-width: 768px) {
		.perfect-game-card {
			padding: 1rem;
			margin: 0 1rem;
		}

		.header {
			flex-direction: column;
			gap: 1rem;
			text-align: center;
		}

		.player-name {
			font-size: 1.5rem;
		}

		.velocity-number {
			font-size: 2.5rem;
		}

		.pitch-item .velocity-number {
			font-size: 1.5rem;
		}

		.secondary-pitches {
			grid-template-columns: 1fr;
		}
	}
</style>
