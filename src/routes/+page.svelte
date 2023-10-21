<script lang="ts">
    import type { PageData } from './$types';
    import FaBell from 'svelte-icons/fa/FaBell.svelte'
    import FaSearch from 'svelte-icons/fa/FaSearch.svelte'
    import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte'

    export let data: PageData;
    let title=`Morning, Mike`;
    let search_query:string;
</script>

<div>
    <nav class="flex justify-between border-b-[1px] px-6 py-2">
        <div class="flex items-center">
            <img class="w-[45px] h-[45px] object-cover rounded-[50px]" src='/eggs.png' alt='.'/>
            <div class="ml-2">
                <p class="text-base font-semibold">{title}</p>
                <p class="text-sm text-gray-700 -mt-1">Breakfast time</p>
            </div>
        </div>
        <form class="flex h-[40px] items-center bg-gray-100 rounded-[30px] py-1 px-4 w-[50vw]">
            <div class="w-[19px] h-[19px] text-green-500 mr-2">
                <FaSearch/>
            </div>
            <input type="text" class="flex-grow text-gray-500 bg-transparent focus:outline-none text-base placeholder:text-gray-500" bind:value={search_query} placeholder="Search for food"/>
            <div class="w-[19px] ml-auto h-[19px] text-green-500 mr-2">
                <FaAngleRight/>
            </div>
        </form>
        <div class="flex items-center w-[18vw]">
            <button title='notifications' class="ml-auto w-[23px] h-[23px] rounded-[50px] text-green-600">
                <FaBell/>
            </button>
        </div>
    </nav>
    <div class="px-8 py-2">
        <p class="text-xl mb-2 text-gray-700 font-semibold">Reminder</p>
        <div class="bg-green-100 rounded-md flex flex-col">
            <div></div>
        </div>
    </div>
    <div class="grid grid-cols-4 gap-5 mt-12 mb-6 mx-8">
        {#if data.data}
            {#each data.data as item}
            <a href={`/blogs/${item.id}`} class="rounded-md hover:shadow-md hover:shadow-slate-400">
                <div class="flex flex-col">
                     <!-- svelte-ignore a11y-img-redundant-alt -->
                     <a href={item.image}>
                        <img class="w-[230px] h-[200px] rounded-[10px]" src={item.image} alt={item.title}/>
                    </a>
                </div>
                <p class="text-base font-semibold">{item.title}</p>
                <p class="text-sm text-gray-500">{item.kcal}</p>
                 <p class="snippet">{item.measurements}</p>
             </a>
            {/each}
        {:else}
            <div class="tag">
                <p class="error">{data.error}</p>
            </div>
        {/if}
    </div>
</div>


<style lang="postcss">
    :global(html) {
        background-color: theme(colors.white);
        margin:0;
        padding:0;
    }
</style>