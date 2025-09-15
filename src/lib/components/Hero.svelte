<!-- Hero.svelte -->
<div class="hero min-h-screen">
	<div class="hero-content">
		<div class="hero-grid">
			<div class="hero-text">
				<h1 class="text-5xl font-bold">Jude McDonald</h1>
				<h2 class="text-2xl font-bold">Baseball - RHP - Class of 2026</h2>
				<h3 class="text-xl font-bold">
					<a
						href="https://stonybrookathletics.com/sports/baseball"
						target="_blank"
						rel="noopener noreferrer">Stony Brook</a
					>
					Commit,
					<a
						href="https://www.perfectgame.org/PGBA/Team/default.aspx?orgid=19030&orgteamid=223220&team=884216&Year=2025"
						target="_blank"
						rel="noopener noreferrer">CBU Scout Team</a
					>, and
					<a href="https://esj.org/athletics/" target="_blank" rel="noopener noreferrer"
						>Episcopal School of Jacksonville</a
					>
				</h3>
				<div class="text-container">
					<p class="py-6">
						A 6'3" right-handed pitcher from Jacksonville, Florida. With an 91 mph fastball, a 4.04
						GPA, and a 31 on my ACT.
						<br />
						<br />
						"I'm excited about contributing to Stony Brook on the field and in the classroom."
					</p>
				</div>
				<div class="cta-buttons">
					<a href="#highlights" class="cta-button primary">Watch Highlights</a>
				</div>
			</div>
			<div class="hero-image">
				<img
					src="/images/jude-pitching.jpeg"
					class="max-w-sm rounded-lg shadow-2xl"
					alt="Jude McDonald pitching"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.hero {
		background: linear-gradient(var(--bg-1), var(--bg-2));
		color: var(--fg-1);
		padding: 6rem 0;
		margin-bottom: 2rem;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		z-index: 2;
	}

	.hero-text {
		text-align: left;
	}
	.text-container {
		background: rgba(0, 0, 0, 0.3);
		padding: 1.5rem;
		border-radius: var(--border-radius);
		margin-top: 1rem;
		backdrop-filter: blur(5px);
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: flex-start;
		margin-top: 2rem;
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

	.hero-image img {
		width: 100%;
		max-width: 500px;
		height: auto;
		border-radius: var(--border-radius);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		margin: 0 auto;
		display: block;
	}

	@media (max-width: 768px) {
		.hero-grid {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.hero-text {
			text-align: center;
		}

		.cta-buttons {
			justify-content: center;
		}

		.hero h1 {
			font-size: 2.5rem;
		}

		.hero h2 {
			font-size: 1.5rem;
		}
	}
</style>
