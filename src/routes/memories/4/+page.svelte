<script>
  import p1 from "$lib/images/4/p1.jpeg";
  import p2 from "$lib/images/4/p2.jpeg";
  import p3 from "$lib/images/4/p3.jpeg";
  import p4 from "$lib/images/4/p4.jpeg";
  import Carousel from "$lib/components/Carousel.svelte";
</script>

<h2 class="text-2xl font-bold">Apr 13, 2023</h2>
<p class="text-xl mb-2">The random hangout of me, you, and Vinh.</p>

<Carousel images={[p1, p2, p3, p4]} />

<p class="mb-2 px-5 text-left">
  He really thought I was lonely...I had crutches, and you had a lot of tea to spill. Started off 
  many weeks of us hanging out together. Study sessions in VMH, McKeldin, and Patterson for finals.
  Had so much fun talking to you. The starting event that caused it all, Kdramas and all. Sushi bake was so good.
</p>

<a class="btn btn-info" href="/memories/5">Next &gt;</a>
