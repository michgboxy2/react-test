import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import requireAuth from './requireAuth';


class CommentBox extends Component {
    state = {comment : ''};

    //Our component just got rendered
    

    handleChange = (event) => {
        this.setState({comment : event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();

        //TODO - call an action creator
        this.props.saveComment(this.state.comment);

        //save the comment
        this.setState({comment : ''})
    };


    render() {
        return(
            <div>
           <form onSubmit={this.handleSubmit}>
               <h4>Add a comment</h4>
               <textarea onChange={this.handleChange} value={this.state.comment}/>
               <div>
                   <button>Submit Comment</button>
               </div>
           </form> 
           <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
           </div>
        );
    }
}




export default connect(null, actions)(requireAuth(CommentBox));