<script lang="ts">
    // import {Router, Route, navigate} from "svelte-routing"
    import Router from "../router.svelte"
	import { CurrentRoute } from "../router.svelte.ts";
    import Page1 from "../views/page1/page1.svelte"
    import Page2 from "../views/page2/page2.svelte"
    import Page3 from "../views/page3/page3.svelte"

    const routes = [
        {
            path: "page-1",
            component: Page1
        },
        {
            path: "page-2",
            component: Page2
        },
        {
            path: "page-3",
            component: Page3
        },
    ]
</script>
<a href="/#/page-1" onclick={()=>{
    CurrentRoute.SwitchTo("page-1")
}}>page 1</a>
<a href="/#/page-2" onclick={()=>{
    CurrentRoute.SwitchTo("page-2")
}}>page 2</a>
<a href="/#/page-3" onclick={()=>{
    CurrentRoute.SwitchTo("page-3")
}}>page 3</a>

<Router routes={routes}></Router>