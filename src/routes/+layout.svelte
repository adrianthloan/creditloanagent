<script>
  import "../app.css"
  import Header from "$lib/components/Header.svelte"
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="wrap flex flex-col items-center min-w-[1263px] min-h-[937px] m-0 p-0 w-full h-full">
    <Header/>
    <slot/>
    <Footer/>
</div>
