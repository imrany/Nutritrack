<script lang="ts">
import { browser } from "$app/environment";
import { goto } from "$app/navigation";
const logout=()=>{
    if(browser){
        window.localStorage.clear()
        goto('/')
    }
}
</script>
<svelte:head>
	<title>Nutritrack | Log out</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>
<div class="h-[100vh] flex flex-col justify-center items-center w-[100vw]">
    <p class="text-xl">Log out from Nutritrack</p>
    <button on:click={logout} class="mt-2 text-blue-500 underline">Log out</button>
</div>