export interface HomeState {
    navBool: boolean
}


const HomeModule = {
    state: {
        navBool: true
    },
    mutations: {
        setNavBool(state: HomeState) {
            state.navBool = !state.navBool
        }
    },
    actions: {

    },
    getters: {

    }
}

export default HomeModule