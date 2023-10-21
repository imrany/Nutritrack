<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css'
    import ChevronCircleUp from 'svelte-icons/fa/FaChevronCircleUp.svelte';

	export let data: LayoutData;
</script>

<header>
    <h1>Nutritrack</h1>

    <div class="submenu">
        {#each data.sections as section}
            <a href="/settings/{section.slug}">{section.title}</a>
        {/each}
        <div class="h-[32px] w-[32px]">
            <ChevronCircleUp />
        </div>
    </div>
</header>

<main>
    <slot></slot>
</main>