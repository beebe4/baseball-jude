<script lang="ts">
	let collegeName = '';
	let coachName = '';
	let email = '';
	let phone = '';

	function handleSubmit() {
		// TODO: Implement form submission logic
		console.log('Form submitted', { collegeName, coachName, email, phone });
		// Reset form
		collegeName = '';
		coachName = '';
		email = '';
		phone = '';
	}
</script>

<section class="section">
	<h2>College Coach Contact Form</h2>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="form-group">
			<label for="collegeName">College/University:</label>
			<input type="text" id="collegeName" bind:value={collegeName} required />
		</div>
		<div class="form-group">
			<label for="coachName">Coach Name:</label>
			<input type="text" id="coachName" bind:value={coachName} required />
		</div>
		<div class="form-group">
			<label for="email">Email:</label>
			<input type="email" id="email" bind:value={email} required />
		</div>
		<div class="form-group">
			<label for="phone">Phone:</label>
			<input type="tel" id="phone" bind:value={phone} required />
		</div>
		<button type="submit">Send</button>
	</form>
</section>

<style>
	form {
		max-width: 400px;
		margin: 0 auto;
	}
	.form-group {
		margin-bottom: 1rem;
	}
	label {
		display: block;
		margin-bottom: 0.25rem;
		font-weight: bold;
	}
	input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: var(--border-radius);
	}
</style>
