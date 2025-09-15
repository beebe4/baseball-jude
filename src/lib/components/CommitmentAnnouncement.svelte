<script lang="ts">
	const seawolfPng = '/images/stony-brook-seawolf.jpg';
</script>

<section class="section announcement">
	<div class="announcement-content">
		<div class="text">
			<h2>Exciting news!</h2>
			<p>
				Over the last two years, I focused on finding the right fit — competing hard, developing my
				arsenal, and earning the opportunity to pitch at the next level.
			</p>
			<p>
				I'm excited to share that I've committed to <strong>Stony Brook University</strong> (D1) for
				the 2026–2027 school year. Thank you to my family, teammates, and coaches at CBU and ESJ for
				the support and belief.
			</p>
			<p class="cta">Go Seawolves — looking forward to the next four years!</p>
		</div>

		<div class="media">
			<img class="seawolf-card" src={seawolfPng} alt="Stony Brook Seawolves mark" />
		</div>
	</div>
</section>

<style>
	.announcement {
		background: white;
		padding: 1.25rem;
		border-radius: var(--border-radius);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin: 1.25rem 0;
	}

	.announcement-content {
		display: grid;
		grid-template-columns: 1.3fr 0.7fr;
		gap: 1.25rem;
		align-items: center;
	}

	.text h2 {
		margin: 0 0 0.5rem 0;
	}

	.cta {
		margin-top: 0.5rem;
		font-weight: 600;
		color: var(--accent);
	}

	.media {
		display: flex;
		justify-content: center;
	}

	.seawolf-card {
		width: clamp(180px, 28vw, 300px);
		height: auto;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
	}

	@media (max-width: 768px) {
		.announcement-content {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.announcement {
			padding: 1rem;
			margin: 1rem 0;
		}
	}
</style>
