import React, { Component } from 'react';
import { Field,reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPosts } from '../actions/';

class PostsNew extends Component {

    renderField(field){

        const { meta : { touched, error } }=field;
        const className=`form-group ${touched && error ? 'has-danger':''}`

        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}/>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        console.log(values);
        this.props.createPosts(values,()=>{
            this.props.history.push('/');
        });
        
    }

    render() {

        const handleSubmit=this.props.handleSubmit;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                <Field
                    label="Title"
                    name="title"
                    type="text"
                    component={this.renderField}/>

                <Field
                    label="Categories"
                    name="categories"
                    type="text"
                    component={this.renderField}/>

                <Field
                    label="Post Contents"
                    name="contents"
                    type="text"
                    component={this.renderField}/>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        );
    }
}

function validate(values){

    const errors={};

    if(!values.title){
        errors.title="Enter a title";
    }
    if(!values.categories){
        errors.categories="Enter a category"
    }
    if(!values.contents){
        errors.contents="Enter content"
    }

    return errors;

}


export default reduxForm({
    validate,
    form:'PostsNewForm'
})(
    connect(null,{createPosts})(PostsNew)
);