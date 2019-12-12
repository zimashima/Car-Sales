//this is to avoid typo
export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'


//action creator : create action
// just a plain object but it has to have a value of type, otherwise it's not an action

export const add = (thing) => {
    return {type: ADD_FEATURE, payload: thing}
}

//this 'thing' is what we're trying to add, the FEATURE that we're trying to add

export const remove = (thing) => {
    return {type: REMOVE_FEATURE, payload: thing}
}