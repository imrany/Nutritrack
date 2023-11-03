<script lang="ts">
	import type { LayoutData } from './$types';
    import SetReminder from '$lib/components/dialogs/SetReminder.svelte';

	export let data: LayoutData;
</script>

<main class="flex min-h-[100vh] v-[100vw]">
    <nav class="border-r-[1px] bg-green-100 w-[13vw]">
        <div class="fixed py-4 px-3">
            <div class="flex flex-col">
                <a href="/" class="text-2xl font-semibold">Nutritrack</a>
                <div class="mt-4 flex flex-col">
                    {#each data.sections as section}
                        <a href="/{section.slug}" class="flex justify-center bg-green-400 my-1 rounded-[10px] items-center w-[11vw] py-2 px-3">
                            {section.title}
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </nav>
    
    <div class="w-[87vw]">
        <slot></slot>
    </div>
</main>
<SetReminder/>