import React from 'react';

class CreatePostForm extends React.Component {
 
  constructor(props){
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return e=> this.setState({[field]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createPost(this.state)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={this.update("title")} />
          <textarea type="text" value={this.state.description} onChange={this.update("description")}></textarea>
          <input type="submit" value="Submit"/>
         </form>
      </div>
    );
  }
}

export default CreatePostForm;
