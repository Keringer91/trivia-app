import {chuckService} from './../services/ChuckService'

export const ChuckStoreModule = {
    state: {
        joke: null,
        categories: []
    },
    mutations: {
        setJoke(state, joke) {
            state.joke = joke
        },
        setCategory(state, categories) {
            state.categories = categories
        }
    },
    actions: {
        async fetchJoke(context, cat) {
            try {
              const response = await chuckService.getRandomJoke(cat)
              console.log(cat)//eslint-disable-line
              context.commit('setJoke', response.value)
              return response.value
            } catch(error) {} //eslint-disable-line
          },
        async fetchCategory(context) {
            try {
            const response = await chuckService.getJokeCategories()
            context.commit('setCategory', response)
            return response
            } catch(error) {} //eslint-disable-line
        }
    },
    getters: {
        getJoke(state) {
            return state.joke
        },
        getCategory(state) {
            return state.categories
        }
    }
}