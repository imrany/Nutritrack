<script lang="ts">
    import {goto} from '$app/navigation';
    import { onMount, getContext } from 'svelte';

    const userdata:any=getContext('userdata');
    console.log(userdata)
    
    function checkIfAuthenticated(){
      if(userdata!==null){
        goto('/home')
      }  
    }
    
    let btnStyle="background:green;"
    const handleLogin=async(e:any)=>{
        try{
            e.preventDefault()
            btnStyle="background:gray; cursor:wait;"
            const response=await fetch('/api/user/login',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({
                    username:e.target.username.value,
                    password:e.target.password.value
                })
            })
            const parseRes=await response.json()
            if(parseRes.error){
                alert(parseRes.error)
                btnStyle="background:green;"
            }else{
                if(parseRes.msg!=undefined){
                    alert(parseRes.msg)
                    const userdata=JSON.stringify(parseRes.body)
                    localStorage.setItem("userdata",userdata)
                    goto('/home')
                }else{
                    alert("No internet")
                }
            }
        }catch(error:any){
            console.log(error)
            btnStyle="background:green;"
        }
    }

    onMount(() => {
        checkIfAuthenticated()
    });
</script>
<svelte:head>
	<title>Nutritrack | Log in</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>
<div class="h-[90vh] w-[100vw] flex flex-col justify-center items-center">
    <p class="font-semibold text-2xl">Login to Nutritrack</p>
    <form class="flex flex-col mt-4 w-[35vw]" on:submit={handleLogin}>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="text-lg">Enter username</label>
        <input name="username" required type="text" placeholder="John doe" class="border-gray-400 border-[1px] p-2 mt-1 rounded-md focus:outline-green-400"/>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="text-lg mt-1">Enter password</label>
        <input name="password" minlength="8" required type="password" class="border-gray-400 border-[1px] p-2 mt-1 rounded-md focus:outline-green-400"/>
        <button style={btnStyle} class="rounded-md mt-3 text-white h-[40px] flex justify-center items-center">Submit</button>
        <a href="/" class="mt-4 text-blue-500 underline text-center">Create account instead?</a>
    </form>
</div>


<style lang="postcss">
    :global(html) {
        background-color: theme(colors.white);
        margin:0;
        padding:0;
    }
</style>