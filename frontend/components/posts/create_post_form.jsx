import React from 'react';
import {Link} from 'react-router-dom';

class CreatePostForm extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {title:'', description:'', image:null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile=this.handleFile.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(field){
    return e=> this.setState({[field]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData() ;
    formData.append('post[title]', this.state.title);
    formData.append('post[description]', this.state.description);
    formData.append('post[image]', this.state.image);
    // console.log(formData);
  
    this.props.createPost(formData).then(()=> this.props.history.push('/'))
  }

  handleFile(e){  
    this.setState({image: e.currentTarget.files[0]});
  }

  render () {
    // console.log(this.props.createPost)
    // console.log(this.props.test)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Title:
          <input type="text" value={this.state.title} onChange={this.handleUpdate("title")} />
          </label>
          <label> Description:
          <textarea type="text" value={this.state.description} onChange={this.handleUpdate("description")}></textarea>
          </label>
          <input type="file" onChange={this.handleFile}/>
          <input type="submit" value="Create Post"/>
         </form>
      </div>
    );
  }
}

export default CreatePostForm;
