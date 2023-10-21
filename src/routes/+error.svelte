<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="h-[100vh] flex flex-col justify-center items-center w-[80vw]">
	<p class="text-xl">{$page.status}: {$page.error.message}</p>
	<a href='/' class="mt-2 text-blue-500 underline">Go Home</a>
</div>