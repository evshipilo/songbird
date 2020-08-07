import {action, computed, decorate, observable} from "mobx";
import {createContext} from "react";

class Store {
  @observable score = 0

  // @computed get superScore() {
  //   return this.score + 100
  // }

  @action increaseScore() {
    this.score += 1
  }

  @observable songClass = 0

  @action increaseBirdsClass() {
    this.songClass += 1
  }

  @observable rightAnswer = false

  @action setRightAnswer(bool) {
    this.rightAnswer = bool
  }



}

// decorate(Store, {
//   score: observable,
//   birdsClass: observable,
//   rightAnswer: observable,
//   superScore: computed,
//   increaseScore: action,
//   changeTab: action,
//   setRightAnswer: action,
//
// })


export const store = new Store()
export const StoreContext = createContext()

