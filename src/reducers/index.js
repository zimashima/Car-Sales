import {ADD_FEATURE, REMOVE_FEATURE} from './../actions'
//import action type


export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const featureReducer = (state = initialState, action) => {
    switch(action.type){

        //1) remove an object in additionalFeatures because we don't want our smart customer to click on it again, 
        //2) put it in car.features
        //3) and update car.price
        case ADD_FEATURE:
            return {
                ...state, //just do it
                car: {
                    ...state.car, //saving name and image
                    price: state.car.price + action.payload.price, //when we click, we get action and this is where we put that ACTION.PAYLOAD
                    features: [...state.car.features, action.payload] //adding the whole object
                },
                additionalFeatures: state.additionalFeatures.filter(el => el.id !== action.payload.id) //!== create a new array, DO return anything that doesn't match id
            }
        //default always last

        case REMOVE_FEATURE:
            return{
                ...state,
                car: {
                    ...state.car,
                    price: state.car.price - action.payload.price,
                    features: state.car.features.filter(el => el.id !== action.payload.id)
                },
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }

        default:
            return state
    }
}


