import React, { Component } from "react";
import {connect} from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {

    componentDidMount() {
      this.shouldNavigateAway();
  }

  componentDidUpdate(){
      this.shouldNavigateAway();
  }

  shouldNavigateAway() {
      if(!this.props.auth){
          this.props.history.push('/');
      } 
  }


    render() {
      return <ChildComponent {...this.props}/>; //passes down all props in the HOC to the component
    }
  }

  function mapStateToProps(state) {
    return {auth: state.auth};
}

  return connect(mapStateToProps)(ComposedComponent);
};



//THE SKELETON OF EVERY HOC DESIGN

// export default ChildComponent => {
//   class ComposedComponent extends Component {
//     render() {
//       return <ChildComponent />;
//     }
//   }


//   return ComposedComponent;
// };
