<!-- VideoHighlights.svelte -->
<section id="highlights" class="section video-section">
	<h2>Game Highlights</h2>
	<div class="video-grid">
		<div class="video-card">
			<div class="video-wrapper">
				<iframe
					src="https://www.youtube.com/embed/YEJfNC4S4S4"
					title="Jude McDonald Pitch Arsenal"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div class="video-details">
				<h3>Pitch Arsenal</h3>
				<p>Showcasing my three main pitches</p>
			</div>
		</div>
		<div class="video-card">
			<div class="video-wrapper">
				<iframe
					src="https://www.youtube.com/embed/Qf2ahreiVk0?start=3666"
					title="No Gate Fees - Committed to the Uncommitted"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div class="video-details">
				<h3>No Gate Fees Feature</h3>
				<p>Featured on "Committed to the Uncommitted"</p>
			</div>
		</div>
	</div>
</section>

<style>
	.video-section {
		background-color: var(--bg-2);
		padding: 4rem 2rem;
	}

	.video-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2.5rem;
		margin-top: 2rem;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.video-card {
		background: white;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease-in-out;
	}

	.video-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.video-wrapper {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
		height: 0;
		overflow: hidden;
		background: var(--bg-2);
	}

	.video-wrapper iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
	}

	.video-details {
		padding: 1.5rem;
		text-align: left;
		background: white;
	}

	.video-details h3 {
		color: var(--accent);
		font-size: 1.4rem;
		margin: 0 0 0.5rem 0;
		font-weight: 600;
		line-height: 1.2;
	}

	.video-details p {
		margin: 0;
		color: var(--fg-2);
		font-size: 1rem;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		.video-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
			padding: 0 1rem;
		}

		.video-card {
			margin-bottom: 1rem;
		}

		.video-details {
			padding: 1.25rem;
		}

		.video-details h3 {
			font-size: 1.2rem;
		}

		.video-details p {
			font-size: 0.95rem;
		}
	}
</style>
