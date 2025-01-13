<script lang="ts">
	import { onMount } from "svelte";
    import { CurrentRoute } from "./router.svelte.ts";
    let {routes} = $props()

    onMount(() => {
        let url = window.location.href
        const switchOnMatch = (path: string) => {
            if (url.includes(path)) CurrentRoute.SwitchTo(path)
        }
        routes.forEach((element : any) => {
            switchOnMatch(element.path)
        });
    })
</script>

{#each routes as route}
<div style="
display: {CurrentRoute.MatchWithCurrent(route.path) ? "inherit" : "none"};
height: inherit;
width: inherit;
flex-direction: inherit;
margin: inherit;
paddign: 0px;
"
id={"/"+route.path}
>
<route.component/>
</div>
{/each}