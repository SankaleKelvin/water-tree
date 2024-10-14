import { defineStore } from "pinia";

export const useDrawerStore = defineStore('drawer', {
    state: () => ({
        drawer: false
    }),

    actions: {
        setDrawerState(drawer){
            console.log(drawer);
            this.drawer = drawer;
        }
    }
})