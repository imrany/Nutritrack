<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css'

	export let data: LayoutData;
</script>

<header>
    <h1>Nutritrack</h1>

    <div class="submenu">
        {#each data.sections as section}
            <a href="/settings/{section.slug}">{section.title}</a>
        {/each}
    </div>
</header>

<main>
    <slot></slot>
</main>