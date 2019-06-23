import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        content: []
    },
    mutations: {
        set(state, { type, items} ){
            state[type] = items;
        }
    },
    getters: {
        content(state) {
            return state.content
        }
    },
    actions : {
        getContent( {commit}, props ){ 
            console.log(props);
            axios.post('http://localhost:3000/content/getContent', props )
                
                .then( (response) => {

                    /*eslint no-console: "off"*/
                    console.log(response);

                    const content = response.data;
                    /*eslint no-console: "off"*/
                    console.log(content);
                    commit('set', {type : 'content', items : content });
                })
        }
    }
})

export default store;