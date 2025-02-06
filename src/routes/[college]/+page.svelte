<script lang="ts">
  import { page } from '$app/stores';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import axios from 'axios';

  const college = $page.params.college;
  let logo = 'https://placeholder.com/logo.png'; // Default logo
  let mascot = 'Placeholder Mascot'; // Default mascot

  // Fetch college logo from Clearbit
  async function getCollegeLogo(collegeName: string) {
    try {
      const response = await axios.get(`https://autocomplete.clearbit.com/v1/companies/suggest`, {
        params: {
          query: collegeName
        }
      });

      if (response.data.length > 0 && response.data[0].logo) {
        logo = response.data[0].logo; // Use the logo from the response
      }
    } catch (error) {
      console.error('Error fetching logo:', error);
    }
  }

  // Fetch college logo and mascot on page load
  async function fetchCollegeInfo() {
    await getCollegeLogo(college);
    // TODO: Set mascot based on college name if needed
  }

  fetchCollegeInfo();
</script>

<div class="container">
  <header class="header">
    <h1>Hey {college}!</h1>
  </header>

  <main>
    <section class="section">
      <img src={logo} alt="{college} logo" class="college-logo" />
      <p>I'm thrilled that you're checking out my page! I've always admired {college}'s baseball program and would love the opportunity to discuss how I could contribute to your team.</p>
    </section>

    <section class="section">
      <h2>Why I'm Excited About {college}</h2>
      <ul>
        <li>TODO: Add specific reasons for this college</li>
      </ul>
    </section>

    <section class="section">
      <h2>How I Can Contribute</h2>
      <ul>
        <li>TODO: Add specific contributions</li>
      </ul>
    </section>

    <ContactForm />
  </main>
</div>

<style>
  .college-logo {
    max-width: 200px;
    margin-bottom: 1rem;
  }

  .header {
    background-color: red; 
    padding: 2rem; 
  }
</style>