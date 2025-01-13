export type Route = {
    routePath: string,
    component: any,
    params: any
}

function _RouteData() : any {
    let currentRoute = $state<string>("/")
    return {
        get() {
            return currentRoute;
        },
        SwitchTo(path : string) {
            currentRoute = path;
        },
        MatchWithCurrent(path : string) {
            return path === currentRoute;
        }
    }
}


export const CurrentRoute = $state(_RouteData())