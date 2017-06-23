import React, { Component } from 'react';
import { showPost} from '../actions/';
import { connect } from 'react-redux';

class PostShow extends Component {

    componentDidMount(){
        const {id } = this.props.match.params;
        this.props.showPost(id)
    }
    

    render() {

        if(!this.props.post){
            console.log(this.props.post)
            return(
                <div>Loading...</div>
            )
        }
        
        return (
            <div>
                <h3>{this.props.post.title}</h3>
                <h6>{this.props.post.categories}</h6>
            </div>
        );
    }
}

function mapStateToProps({posts},ownProps){
    
    return{
        post:posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{showPost})(PostShow);