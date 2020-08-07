import {action, computed, decorate, observable} from "mobx";
import {createContext} from "react";

class Store {
  @observable score = 0

  @action increaseScore() {
    this.score += 1
  }

//-----------------------------------------------
  @observable songClass = 0

  @action increaseSongsClass() {
    this.songClass += 1
  }

//-----------------------------------------------
  @observable isRightAnswer = false

  @action setIsRightAnswer(bool) {
    this.isRightAnswer = bool
  }

//-----------------------------------------------
  @observable arrayOfAnswers = []

  @action addToArrayOfAnswers(num) {
    this.arrayOfAnswers.push(num)
    this.isRightAnswer = (num === this.rightAnswer)
  }

  @action clearArrayOfAnswers() {
    this.arrayOfAnswers = []
  }

//-----------------------------------------------
  @observable rightAnswer = null

  @action setRightAnswer() {
    this.rightAnswer = Math.round(-0.5 + Math.random() * (5 + 1))
  }


//-----------------------------------------------


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

