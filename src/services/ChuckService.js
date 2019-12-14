import Chuck from 'chucknorris-io'

export class ChuckService {
    constructor() {
       this.chuck = new Chuck()
    }
    getRandomJoke(cat) {
        console.log(cat)//eslint-disable-line
        return this.chuck.getRandomJoke(cat);
    }
    getJokeCategories() {
        return this.chuck.getJokeCategories();
    }
}
export const chuckService = new ChuckService();