<script lang="ts">
    import type { PageData } from './$types';
    import FaBell from 'svelte-icons/fa/FaBell.svelte'
    import FaSearch from 'svelte-icons/fa/FaSearch.svelte'
    import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte'
    import FaMoon from 'svelte-icons/fa/FaMoon.svelte'
    import FaSun from 'svelte-icons/fa/FaSun.svelte'
    import FaCloudSun from 'svelte-icons/fa/FaCloudSun.svelte'
    import { onMount } from 'svelte';
    import { getContext } from 'svelte';

    export let data: PageData;
    let title=`Morning, Mike`;
    let search_query:string;
    const open_reminder_dialog=()=>{
        const toast=document.getElementById('set-reminder') as HTMLDivElement
        toast.style.transition='ease-in-out'
        toast.style.transitionDuration='1s'
        toast.style.transitionDelay='2s'
        toast.style.display="flex"
    };
    onMount(() => {
        open_reminder_dialog()
        console.log('the component has mounted');
    });
    const answer = getContext('answer');
    console.log(answer)
</script>
<svelte:head>
	<title>Nutritrack | Home</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>
<div>
    <nav class="flex justify-between border-b-[1px] px-6 py-2">
        <div class="flex items-center">
            <img class="w-[45px] h-[45px] object-cover rounded-[50px]" src='/images/eggs.png' alt='.'/>
            <div class="ml-2">
                <p class="text-base font-semibold">{title}</p>
                <p class="text-sm text-gray-700 -mt-1">Breakfast time</p>
            </div>
        </div>
        <form action="/api/search" method="post" class="flex h-[40px] items-center bg-gray-100 rounded-[30px] py-1 px-4 w-[50vw]">
            <div class="w-[19px] h-[19px] text-green-500 mr-2">
                <FaSearch/>
            </div>
            <input name="q" required type="text" class="flex-grow text-gray-500 bg-transparent focus:outline-none text-base placeholder:text-gray-500" bind:value={search_query} placeholder="Search for food"/>
            <button class="w-[19px] ml-auto h-[19px] text-green-500 mr-2">
                <FaAngleRight/>
            </button>
        </form>
        <div class="flex items-center w-[18vw]">
            <button on:click={open_reminder_dialog} title='notifications' class="ml-auto w-[23px] h-[23px] rounded-[50px] text-green-600">
                <FaBell/>
            </button>
        </div>
    </nav>
    <div class="px-8 py-2 mt-4">
        <p class="text-xl mb-2 text-gray-700 font-semibold">Reminder</p>
        <div class="flex flex-col gap-y-2">
            <div class="bg-green-100 px-4 py-2 rounded-md flex flex-col">
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <div class="w-[20px] h-[20px] mr-2 text-green-500">
                            <FaCloudSun/>
                        </div>
                        <p class="text-base font-semibold">Breakfast</p>
                    </div>
                    <div class="flex items-center text-gray-500 text-sm">
                        <p class="">8:30AM</p>
                        <div class="w-[15px] h-[15px]">
                            <FaAngleRight/>
                        </div>
                    </div>
                </div>
                <p class="text-sm text-gray-600 mt-2 ml-2">2 Slices whole wheat bread.</p>
            </div>
            <div class="bg-green-100 px-4 py-2 rounded-md flex flex-col">
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <div class="w-[20px] h-[20px] mr-2 text-green-500">
                            <FaSun/>
                        </div>
                        <p class="text-base font-semibold">Lunch</p>
                    </div>
                    <div class="flex items-center text-gray-500 text-sm">
                        <p class="">12:30PM</p>
                        <div class="w-[15px] h-[15px]">
                            <FaAngleRight/>
                        </div>
                    </div>
                </div>
                <p class="text-sm text-gray-600 mt-2 ml-2">Rice and Beans.</p>
            </div>
            <div class="bg-green-100 px-4 py-2 rounded-md flex flex-col">
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <div class="w-[20px] h-[20px] mr-2 text-green-500">
                            <FaMoon/>
                        </div>
                        <p class="text-base font-semibold">Supper</p>
                    </div>
                    <div class="flex items-center text-gray-500 text-sm">
                        <p class="">8:30PM</p>
                        <div class="w-[15px] h-[15px]">
                            <FaAngleRight/>
                        </div>
                    </div>
                </div>
                <p class="text-sm text-gray-600 mt-2 ml-2">Ugali, kales and meat.</p>
            </div>
        </div>
    </div>
    
    <div class="mt-12 mb-6 mx-8">
        <p class="text-2xl mb-2 text-gray-700 font-semibold">Recommendations</p>
        <div class="grid grid-cols-4 gap-x-5 gap-y-8">
            {#if data.data}
                {#each data.data as item}
                <a href={`/blogs/${item.id}`} class="rounded-md ">
                    <div class="flex flex-col">
                         <!-- svelte-ignore a11y-img-redundant-alt -->
                         <a href={item.image}>
                            <img class="w-full object-cover h-[200px] rounded-[10px]" src={item.image} alt={item.title}/>
                        </a>
                    </div>
                    <div class="p-2">
                        <p class="text-base font-semibold">{item.title}</p>
                        <p class="text-sm text-gray-500">{item.kcal}</p>
                        <div class="flex justify-between my-2">
                            {#each item.measurements as n,i }
                                <p class="text-xs">{n.quantity}|<span class="text-gray-600">{n.type}</span></p>
                            {/each}
                        </div>
                    </div>
                 </a>
                {/each}
            {:else}
                <div class="tag">
                    <p class="error">{data.error}</p>
                </div>
            {/if}
        </div>
    </div>
</div>


<style lang="postcss">
    :global(html) {
        background-color: theme(colors.white);
        margin:0;
        padding:0;
    }
</style>