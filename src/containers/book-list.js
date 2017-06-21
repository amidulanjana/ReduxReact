import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/';
import {bindActionCreators} from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li 
                    key={book.title} 
                    onClick={()=>this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    //return result will be available for booklist as props
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch){
    //return result will be passed to all the reducers
    return bindActionCreators({selectBook:selectBook},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList)