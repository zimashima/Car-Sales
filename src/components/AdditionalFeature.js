import React from 'react';

//import action
import {add} from './../actions'
//import connect
import {connect} from 'react-redux'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=> props.add(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

//onClick => add (action creator) => reducer (changes state) => UI changes

//we just wanna feature as a whole


//connect takes 1) function 2) object 3) components


export default connect(null, {add})(AdditionalFeature);
