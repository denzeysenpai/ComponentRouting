<script lang="ts">
	import { onMount } from 'svelte';
	import { CurrentRoute } from './router.svelte.ts';
	let { routes } = $props();

	onMount(() => {
		let url = window.location.href;
		const switchOnMatch = (path: string) => {
			if (url.includes(path)) CurrentRoute.SwitchTo(path);
		};
		routes.forEach((element: any) => {
			switchOnMatch(element.path);
		});
	});
</script>

{#each routes as route}
	{#if CurrentRoute.MatchWithCurrent(route.path)}
		<route.component />
	{/if}
{/each}
