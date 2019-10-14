import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import _ from 'lodash';
import { Button } from 'reactstrap';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import addPost from './addPost';

class home extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderposts(){
       return  _.map(this.props.posts,post=>{                         //to iterate over object lodash map function is used
            return (<li className="list-group-item" key={post.id}>
                <Link to={`/posts/${post.id}`}>
                    {post.title}
                </Link>
            </li>
            );

        }
            );



    }




    render(){
        console.log(this.props.posts);
        return(
          
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new">
                    <Button color="primary">Add Post</Button>
                     </Link>

                </div>
                
                <h1>Posts</h1>
                <ul className="list-group">
                 {this.renderposts()}    
                </ul>    
                
            </div>
            

        );


    }



}


function mapStateToProps(state){
    return {posts : state.posts};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(home);