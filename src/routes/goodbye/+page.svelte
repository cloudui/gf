
<script lang="ts">
  import { onMount } from 'svelte';

  let count = 5; // Initial countdown value

  // Function to start the countdown
  function startCountdown() {
    setInterval(() => {
      if (count > 0) {
        count--;
      }
    }, 1000);
  }

  // Start the countdown when the component mounts
  onMount(() => {
    startCountdown();
  });
</script>

<section class="card bg-white mx-5 md:w-1/2 h-2/3 opacity-90">
  <div class="card-body items-center text-center">
    <h2 class="text-5xl font-bold pb-10">Sorry, it's time to die.</h2>
    {#if count > 0}
      <span class="countdown text-5xl text-bold pb-10 text-error">
        {count}
      </span>
    {:else}
      <div>
        <img src="/images/explosion.gif" alt="explosion" />
      </div>
    {/if}
  </div>
</section>
