<!-- VideoHighlights.svelte -->
<section id="highlights" class="section video-section">
	<h2>Game Highlights and Podcast Features</h2>
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
					src="https://www.youtube.com/embed/3mGAio-iLjc?start=751"
					title="Where's Home Podcast Feature"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div class="video-details">
				<h3>Where's Home Podcast Feature</h3>
				<p>
					Featured on <a
						href="https://www.youtube.com/@WheresHomePod"
						target="_blank"
						rel="noopener noreferrer">Where's Home Podcast</a
					>
				</p>
			</div>
		</div>
		<div class="video-card">
			<div class="video-wrapper">
				<iframe
					src="https://www.youtube.com/embed/YHF7prcebxY"
					title="Extended Look vs Providence"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div class="video-details">
				<h3>Extended Look vs Providence</h3>
				<p>Three innings of work against district rival Providence</p>
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
				<p>
					Featured on <a
						href="https://www.youtube.com/@ActionSportsJax"
						target="_blank"
						rel="noopener noreferrer">Action Sports Jax</a
					>'s "Committed to the Uncommitted"
				</p>
			</div>
		</div>
	</div>

	<div class="twitter-section">
		<h2>Perfect Game Scouting Reports</h2>
		<div class="tweets-grid">
			<div class="tweet-container">
				<blockquote class="twitter-tweet">
					<p lang="en" dir="ltr">
						Jude McDonald ('26 FL) goes 3 strong innings in the quarters with the FB up to 87, sitting
						84-86 mostly. CH profiles well off the FB with dive in the mid/upper 70's. <a
							href="https://twitter.com/Florida_PG?ref_src=twsrc%5Etfw">@Florida_PG</a
						>
						<a href="https://twitter.com/hashtag/NatElite?src=hash&amp;ref_src=twsrc%5Etfw"
							>#NatElite</a
						> <a href="https://twitter.com/PG_Uncommitted?ref_src=twsrc%5Etfw">@PG_Uncommitted</a>
						<a href="https://t.co/954xKbIi41">pic.twitter.com/954xKbIi41</a>
					</p>
					&mdash; Perfect Game Scout (@PG_Scouting)<a
						href="https://twitter.com/PG_Scouting/status/1808289324955226405?ref_src=twsrc%5Etfw"
						>July 2, 2024</a
					>
				</blockquote>
			</div>
			<div class="tweet-container">
				<blockquote class="twitter-tweet">
					<p lang="en" dir="ltr">
						Jude McDonald ('26 FL) - with 5 Ks over 4 IP w/ 0 ER. Ran the FB up to 89 mph w/ ASR & CB 70-75. Flashed CH 80/81. <a href="https://twitter.com/hashtag/WWBA?src=hash&amp;ref_src=twsrc%5Etfw"
							>#WWBA</a> 
						<a href="https://twitter.com/PG_Uncommitted?ref_src=twsrc%5Etfw">@PG_Uncommitted</a>
 						<a href="https://twitter.com/Florida_PG?ref_src=twsrc%5Etfw">@Florida_PG</a>
 						<a href="https://twitter.com/CBU_FL?ref_src=twsrc%5Etfw">@CBU_FL</a>
					</p>
					&mdash; Perfect Game Scout (@PG_Scouting)<a
						href="https://twitter.com/PG_Scouting/status/1940173519565857080?ref_src=twsrc%5Etfw"
						>December 29, 2024</a
					>
				</blockquote>
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
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2.5rem;
		margin-top: 2rem;
		max-width: 1400px;
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

	.video-details a {
		color: var(--link);
		text-decoration: none;
		transition: color 0.2s;
	}

	.video-details a:hover {
		color: var(--accent);
		text-decoration: underline;
	}

	.twitter-section {
		margin-top: 4rem;
		max-width: 1400px;
		margin-left: auto;
		margin-right: auto;
	}

	.twitter-section h2 {
		margin-bottom: 2rem;
	}

	.tweets-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2.5rem;
		justify-items: center;
	}

	.tweet-container {
		background: white;
		border-radius: var(--border-radius);
		padding: 1rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		max-width: 550px;
		width: 100%;
		transition: transform 0.2s ease-in-out;
		overflow: hidden;
	}

	.tweet-container:hover {
		transform: translateY(-4px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	/* Force Twitter embeds to be responsive */
	.tweet-container .twitter-tweet {
		margin: 0 auto !important;
		width: 100% !important;
		max-width: 100% !important;
	}

	.tweet-container iframe {
		max-width: 100% !important;
	}

	@media (max-width: 768px) {
		.video-section {
			padding: 3rem 1rem;
		}

		.video-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
			padding: 0;
			max-width: 100%;
		}

		.video-card {
			margin-bottom: 1.5rem;
			width: 100%;
		}

		.video-wrapper {
			padding-bottom: 62.25%; /* Slightly taller aspect ratio for mobile */
		}

		.video-details {
			padding: 1.5rem;
		}

		.video-details h3 {
			font-size: 1.3rem;
		}

		.video-details p {
			font-size: 1rem;
		}


		.tweets-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.tweet-container {
			max-width: 100%;
			padding: 0.5rem;
		}

		/* Additional mobile tweet styling */
		.tweet-container .twitter-tweet {
			transform: scale(0.9);
			transform-origin: top center;
		}
	}
</style>
