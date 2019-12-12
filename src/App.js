import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from 'react-redux'


const App = (props) => {
//accessing state through props instead
  console.log(props)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//mapStateToProps is a function that takes in state
//it only returns the state we ask for in return so 




const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  }
}



//connect App.js to store, which means it connects to state
export default connect(mapStateToProps, {})(App);
