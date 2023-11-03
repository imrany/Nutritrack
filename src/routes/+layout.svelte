<script lang="ts">
  import '../app.css'
  import { browser } from '$app/environment';
  import { setContext } from 'svelte';

  const user_data:any=browser?window.localStorage.getItem('userdata'):browser
  const userdata=JSON.parse(user_data)
  setContext('userdata', userdata);
</script>

<main class="flex min-h-[100vh] v-[100vw]">
    <slot></slot>
</main>