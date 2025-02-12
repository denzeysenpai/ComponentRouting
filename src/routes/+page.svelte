<script lang="ts">
	import { onMount } from 'svelte';

	// import {Router, Route, navigate} from "svelte-routing"
	import Router from '../router.svelte';
	import { CurrentRoute } from '../router.svelte.ts';

	// import your routes as components
	import Page1 from '../views/page1/page1.svelte';
	import Page2 from '../views/page2/page2.svelte';
	import Page3 from '../views/page3/page3.svelte';
	import { goto } from '$app/navigation';

	const routes = [
		{
			path: 'page-1',
			component: Page1
		},
		{
			path: '',
			component: Page1
		},
		{
			path: 'page-2',
			component: Page2
		},
		{
			path: 'page-3',
			component: Page3
		}
	];

	onMount(() => {
		let curr = CurrentRoute;
		console.log('MOUNTED');
		if (!window.location.href.includes('/#/')) goto('/#/');
	});
</script>

<a
	href="/#/page-1"
	onclick={() => {
		CurrentRoute.SwitchTo('page-1');
	}}>page 1</a
>
<a
	href="/#/page-2"
	onclick={() => {
		CurrentRoute.SwitchTo('page-2');
	}}>page 2</a
>
<a
	href="/#/page-3"
	onclick={() => {
		CurrentRoute.SwitchTo('page-3');
	}}>page 3</a
>

<Router {routes} />
