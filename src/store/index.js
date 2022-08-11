import {createStore} from 'vuex';
import coachesModules from './modules/coaches/index.js'

const store = createStore({
    modules:{
       coaches:coachesModules
    },
    state(){
        return{
            userId: '3'
        }
    },
    getters:{
        userId(state){
            return state.userId;
        }
    }
})


export default store;