
import {App} from 'vue'
export default {
    install(app:App){
        //logica de crear un plugin
        const Storage:object = {
            get(key:string) : any {
                if(window.localStorage){
                    return true
                }
                return false
            },
            set(key:string, value:any) : void {
                if(window.localStorage){
                    window.localStorage.setItem(key, JSON.stringify(value))
                }
            },
            delete(key:string) : void{
                if(window.localStorage){
                    window.localStorage.removeItem(key)
                }
            }
        }
        //This is for Vue 2
        const {config: {globalProperties}} = app
        globalProperties.$storage = Storage

        
        //This is for Vue 3
        app.provide('Storage', Storage)
    }
}