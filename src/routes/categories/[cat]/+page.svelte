<script lang="ts">
	import type { PageData } from './$types';
    import FaMoon from 'svelte-icons/fa/FaPaw.svelte'
    import FaThLarge from 'svelte-icons/fa/FaHandLizard.svelte'
    import FaWheat from 'svelte-icons/fa/FaGlassCheers.svelte'

    export let data: PageData;
    const cat=data.data.find((item:any)=>item.id==data.cat)
</script>
<svelte:head>
    <title>Nutritrack | {cat.title}</title>
</svelte:head>
<div class="flex flex-col pt-3 pb-9 items-center min-h-[100vh]">
    {#if cat}
        <a href={cat.image}>
            <img src={cat.image} alt={cat.title} class="w-[80vw] bg-gray-100 object-contain h-[350px]"/>
        </a>
        <div class="text-left w-[80vw] mt-2">
            <div class="flex justify-between">
                <p class="font-semibold text-2xl">{cat.title}</p>
                <p class="text-base">{cat.kcal}</p>
            </div>
            <p class="text-base text-gray-500 mt-4">Nutritional value</p>
            <div class="flex flex-col gap-3 mt-3">
                {#each cat.measurements as item}
                    {#if item.type==="Proteins"}
                        <div class="flex">
                            <div class="h-[50px] w-[50px] mr-2 rounded-md border-[2px] border-gray-200 flex justify-center items-center">
                                <div class="w-[30px] h-[30px] text-green-500 mr-2">
                                    <FaMoon/>
                                </div>
                            </div>
                            <div class="flex-grow flex flex-col">
                                <div class="flex justify-between mb-1">
                                    <p class="text-gray-700 font-semibold">{item.type}</p>
                                    <p class="text-gray-500">{item.quantity}</p>
                                </div>
                                <div class="h-2 bg-slate-300 rounded-xl w-full">
                                    <div style={`width:${item.quantity};`} class={`h-2 px-1 bg-green-400 rounded-xl text-white text-sm text-center`}></div>
                                </div>
                            </div>
                        </div>
                        {:else if item.type==="Carbs"}
                            <div class="flex">
                                <div class="h-[50px] w-[50px] mr-2 rounded-md border-[2px] border-gray-200 flex justify-center items-center">
                                    <div class="w-[30px] h-[30px] text-yellow-500 mr-2">
                                        <FaWheat/>
                                    </div>
                                </div>
                                <div class="flex-grow flex flex-col">
                                    <div class="flex justify-between mb-1">
                                        <p class="text-gray-700 font-semibold">{item.type}</p>
                                        <p class="text-gray-500">{item.quantity}</p>
                                    </div>
                                    <div class="h-2 bg-slate-300 rounded-xl w-full">
                                        <div style={`width:${item.quantity};`} class={`h-2 px-1 bg-yellow-400 rounded-xl text-white text-sm text-center`}></div>
                                    </div>
                                </div>
                            </div>
                        {:else}
                        <div class="flex">
                            <div class="h-[50px] w-[50px] mr-2 rounded-md border-[2px] border-gray-200 flex justify-center items-center">
                                <div class="w-[30px] h-[30px] text-purple-500 mr-2">
                                    <FaThLarge/>
                                </div>
                            </div>
                            <div class="flex-grow flex flex-col">
                                <div class="flex justify-between mb-1">
                                    <p class="text-gray-700 font-semibold">{item.type}</p>
                                    <p class="text-gray-500">{item.quantity}</p>
                                </div>
                                <div class="h-2 bg-slate-300 rounded-xl w-full">
                                    <div style={`width:${item.quantity};`} class={`h-2 px-1 bg-purple-400 rounded-xl text-white text-sm text-center`}></div>
                                </div>
                            </div>
                        </div>                   
                    {/if}
                {/each}
            </div>
        </div>
    {:else}
        <div class="tag">
            <p class="error">{data.error}</p>
        </div>
    {/if}
    
</div>
    