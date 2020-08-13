import {action, computed, decorate, observable} from "mobx";
import {createContext} from "react";

class Store {
  @observable score = 0

  @action increaseScore() {
    if (this.isRightAnswer) this.score += 6 - this.arrayOfAnswers.length
  }

//-----------------------------------------------
  @observable songClass = 0

//-----------------------------------------------
  @observable isRightAnswer = false

  @action setIsRightAnswer(bool) {
    this.isRightAnswer = bool
  }

//-----------------------------------------------
  @observable arrayOfAnswers = []

  @action addToArrayOfAnswers(num) {
    if (!this.arrayOfAnswers.includes(num)) this.arrayOfAnswers.push(num)
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
  @observable clickedListItem = null

  @action setClickedListItem(num) {
    this.clickedListItem = num
  }

//-----------------------------------------------
  @observable audioFromAnswerCard = null

  @action getAudioFromAnswerCard(audio) {
    this.audioFromAnswerCard = audio
  }

//-----------------------------------------------
  @observable audioFromQuestionCard = null

  @action getAudioFromQuestionCard(audio) {
    this.audioFromQuestionCard = audio
  }

//-----------------------------------------------

  @action nextRound(){
    this.songClass+=1
    this.isRightAnswer = false
    this.arrayOfAnswers = []
    this.setRightAnswer()
    this.clickedListItem = null
    this.audioFromAnswerCard = null
    this.audioFromQuestionCard = null
  }

  @action nextGame(){
    this.songClass=0
    this.isRightAnswer = false
    this.arrayOfAnswers = []
    this.setRightAnswer()
    this.clickedListItem = null
    this.audioFromAnswerCard = null
    this.audioFromQuestionCard = null
    this.score = 0
  }

//-----------------------------------------------

  @observable showModal=false

  @action setShowModal(bool){
    this.showModal=bool
  }



}

export const store = new Store()
export const StoreContext = createContext()

