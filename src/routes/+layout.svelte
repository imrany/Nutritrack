<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css'
    import ChevronCircleUp from 'svelte-icons/fa/FaChevronCircleUp.svelte';

	export let data: LayoutData;
</script>

<main class="flex min-h-[100vh]">
    <nav class="border-r-[1px] bg-green-100 w-[160px]">
        <div class="flex flex-col py-4 px-2">
            <p class="text-2xl font-semibold">Nutritrack</p>
            <div class="mt-4 flex flex-col">
                {#each data.sections as section}
                    <a href="/settings/{section.slug}" class="flex justify-center bg-green-400 my-1 rounded-[10px] items-center py-2 px-3">
                        {section.title}
                    </a>
                {/each}
            </div>
        </div>
    </nav>
    
    <div class="flex-grow">
        <slot></slot>
    </div>
</main>