<script lang="ts">

  export let images: string[];
</script>

<div class="carousel rounded-box w-96">
{#each images as image}
  <div class="carousel-item h-96">
    <img
      src={image}
      alt={image}
      class="max-h-full" />
  </div>
  {/each}
</div>

<style>
</style>