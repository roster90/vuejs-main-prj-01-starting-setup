import {createStore} from 'vuex';
import coachesModules from './modules/coaches/index.js'
import requestModules from './modules/requests/index'

const store = createStore({
    modules:{
       coaches:coachesModules,
       request: requestModules,
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