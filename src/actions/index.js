
// we build index.js in actions and reducers to make it easy when importing these in other components
//for example, these two belows can be imported as 
// import {ADD_FEATURE, REMOVE_FEATURE} from './actions


export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'
//assigning string to a variable to avoid typo and VSCode also helps with auto completing them


//*****//

//action creator : create action
//just a plain object but it has to have a value of type, otherwise it's not an action

export const add = (thing) => {
    return {type: ADD_FEATURE, payload: thing}
}

//this 'thing', in this assignment, it is the FEATURE that we're trying to add in Car Sales, it is an object containing features information of the car

export const remove = (thing) => {
    return {type: REMOVE_FEATURE, payload: thing}
}