import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Jumbotron } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import { createPost } from '../actions';
import {connect} from 'react-redux';



class postNew extends Component{

//the error property is automatically added to the field object from our validate function
    renderField(field){

        const {meta}=field;
        const className=`form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;



        return(
        <div className={className}>
            <label>{field.label}</label><br></br>
            <input
                className="form-title"
                type="text"
                {...field.input}
                
                />
               <div className="text-help">
               {meta.touched ? meta.error : ''}
               </div>  
        </div>
        );
    }

    onSubmit(values){
    
        this.props.createPost(values,()=>{
           this.props.history.push('/');  

        });
    }


    render(){
        const {handleSubmit}=this.props;

        return(

        <div>  
           <Jumbotron>
        <h1 className="display-8">Add a New Post</h1> 
           </Jumbotron>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
           
                <Field label="Title" name="title" component={this.renderField} />  

                <Field label="Categories" name="categories" component={this.renderField} /> 

                <Field label="Content" name="content" component={this.renderField} /> 

            <button type="submit" className="btn btn-primary">Submit</button>
            
            <Link to="/">
            <button className="btn btn-danger">Cancel</button>
            </Link>
            
            
            
            
            
        </form>

         </div>       
        );


    }



}
//whenever user submits the form validate function is automatically called
//values are the data entered by the user
//if we do console.log(values) => {title:"xyc", categories:"saf", content:"dfvdsfds"}
function validate(values){
    const errors={};

    //inspect the inputs from the 'values' object

    if(!values.title){
        errors.title='Enter a Title';
    }

    if(!values.categories){
        errors.categories='Enter some category';
    }
    if(!values.content){
        errors.content='Enter some content'; //name property and this property must be identical
    }





    //if error is empty then form is fine to submit
    //if errors has any property redux assumes form is invalid

    return errors;
}


export default reduxForm({    //just like connect function
    validate,
    form:'newpostsform'         
})(
   connect(null,{createPost})(postNew)
);
