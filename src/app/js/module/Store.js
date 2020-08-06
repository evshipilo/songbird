import {action, computed, decorate, observable} from "mobx";
import {createContext} from "react";

class Store {
  score= 0

  get superScore(){
    return this.score+100
  }

  increaseScore(){
    this.score+=1
  }

}

decorate(Store,{
  score: observable,
  superScore: computed,
  increaseScore: action,
})


export const store=new Store()
export const StoreContext=createContext()

