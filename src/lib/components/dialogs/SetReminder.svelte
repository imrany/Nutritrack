<script lang="ts">
  import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import FaTimes from 'svelte-icons/fa/FaTimes.svelte'

let error:string=''
const dialog_close=()=>{
    const welcome_toast=document.getElementById('set-reminder') as HTMLDivElement
    welcome_toast.style.transition='ease-in-out'
    welcome_toast.style.transitionDuration='1s'
    welcome_toast.style.transitionDelay='2s'
    welcome_toast.style.display="none"
};

async function toggleClassifier(e:any){
    e.preventDefault()
    try {
        if(browser){
            if(localStorage.getItem("classified")===`${true}`){
                window.localStorage.setItem("classified",`${false}`)
            }else{
                window.localStorage.setItem("classified",`${true}`)
            }
            dialog_close()
            window.location.reload()
        }
    } catch (error:any) {
        error=error.message
    }
}
let classify=browser?window.localStorage.getItem("classified"):null
</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="set-reminder" style="background:rgba(0, 0, 0, 0.1); display:none;" on:dblclick={dialog_close} class="fixed bottom-0 top-0 left-0 right-0 z-40">
    <div class="flex flex-col justify-center items-center h-[100vh] w-full">
        <div class="text-gray-700 bg-white sm:right-14 z-50 max-sm:mx-[5vw] rounded-md shadow-md shadow-gray-500">
            <div class="flex flex-col">
                <button  class="ml-[auto] outline-none m-2" on:click={dialog_close}>
                    <div class="w-[15px] h-[15px] hover:text-[#F45858]">
                        <FaTimes/>
                    </div>
                </button>
                <div class="pb-4 px-8 lg:w-[35vw] md:w-[45vw] sm:w-[55vw]">
                    <p class="text-red-500 text-center text-xl max-md:text-lg max-sm:text-sm">{error}</p>
                    <form class="flex flex-col items-center max-sm:text-xs my-4" on:submit={toggleClassifier}>
                        {#if classify!==`${true}`}
                            <p class="text-xl max-md:text-lg mb-1 max-sm:text-sm">Turn on classify meals with time</p>
                            <button class="mt-4 bg-green-400 text-white w-fit px-5 py-2 flex justify-center items-center text-sm h-fit  cursor-pointer rounded-[5px]">
                                <span>Turn On</span>
                            </button>
                        {:else}
                            <p class="text-xl max-md:text-lg mb-1 max-sm:text-sm">Turn off classify meals with time</p>
                            <button class="mt-4 bg-green-400 text-white w-fit px-5 py-2 flex justify-center items-center text-sm h-fit  cursor-pointer rounded-[5px]">
                                <span>Turn Off</span>
                            </button>
                        {/if}
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    