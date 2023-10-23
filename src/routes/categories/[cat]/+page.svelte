<script lang="ts">
	import type { PageData } from './$types';

    export let data: PageData;
    const cat=data.data.find((item)=>item.id==data.cat)
</script>

<div class="flex flex-col py-10 items-center h-[100vh]">
    {#if cat}
        <a href={cat.image}>
            <img src={cat.image} alt={cat.title} class="w-[40vw] h-[400px]"/>
        </a>
        <div class="content">
            <h1>{cat.title}</h1>
            <p>{cat.kcal}</p>
        </div>
    {:else}
        <div class="tag">
            <p class="error">{data.error}</p>
        </div>
    {/if}
    
</div>
    