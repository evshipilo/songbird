import {action, computed, decorate, observable} from "mobx";
import {createContext} from "react";

class Store {
  score= 0
  birdsClass=0


  get superScore(){
    return this.score+100
  }

  increaseBirdsClass(){
    this.birdsClass+=1
  }

  increaseScore(){
    this.score+=1
  }

}

decorate(Store,{
  score: observable,
  birdsClass: observable,
  superScore: computed,
  increaseScore: action,
  changeTab: action,

})


export const store=new Store()
export const StoreContext=createContext()

