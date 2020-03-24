import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Errors from '../errors/errors';

import { connect } from 'react-redux';
import { createPost } from '../../reducers/posts/posts_actions';
import { toggleLoader } from '../../reducers/ui/loader_action';






class CreatePostForm extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {title:'', description:'', image:null, errors: [], message: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.preview = "";
    this.removeImage = this.removeImage.bind(this);
    this.imageError ='';
    this.handleMessage = this.handleMessage.bind(this)
  }


  componentDidMount(){
    
    this.props.toggleLoader()
    setTimeout(()=>{this.props.toggleLoader()}, 500);
}


  handleUpdate(field){
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.image===null){
      this.setState({message: 'You must upload an image.'})
      return
    }
    const formData = new FormData() ;
    formData.append('post[title]', this.state.title);
    formData.append('post[description]', this.state.description);
    formData.append('post[image]', this.state.image);
    let submitloader = document.getElementsByClassName('lds-facebook')
    submitloader[0].style.display = "block"
    setTimeout(function(){  submitloader[0].style.display = "none" }, 3000);
    this.props.createPost(formData).then(()=> {
      this.props.history.push('/')})
  }

  handleFile(e){  
    this.props.toggleLoader()
    setTimeout(()=>{this.props.toggleLoader()}, 500);
    // let loader = document.getElementsByClassName('lds-ring')
    // loader[0].style.display = "block"
    // setTimeout(function(){  loader[0].style.display = "none" }, 3000);
    this.setState({image: e.currentTarget.files[0]});
    let Sucess = document.getElementsByClassName('Sucess')
    setTimeout(function(){  Sucess[0].style.display = "block" }, 3000);
    var file= document.querySelector('input[type=file]').files[0];    
    this.preview = URL.createObjectURL(file)
    this.setState({message: ''})

  }


  handleDrop(e){  
    e.preventDefault()
    e.stopPropagation()

    this.props.toggleLoader()
    setTimeout(()=>{this.props.toggleLoader()}, 500);

    this.setState({image: e.dataTransfer.files[0]});
    let Sucess = document.getElementsByClassName('Sucess')

    setTimeout(function(){  Sucess[0].style.display = "block" }, 500);
    var file= e.dataTransfer.files[0];
    this.setState({message: ''})
    this.preview = URL.createObjectURL(file)
  }

  onDragEnter(e){  
    e.preventDefault()
    e.stopPropagation()

  }


  onDragOver(e){  
    e.preventDefault()
    e.stopPropagation()
  }


  removeImage(){
    this.setState({image: null});
  }

  handleCancel(){
    this.props.history.push('/')
}

handleMessage(){
  this.setState({message: ''})
}

                
  render () {

//     <div className="lds-ring">
//     <div></div>
//     <div></div>
//     <div></div>
//     <div></div>
//  </div>

   
return (
  
  
  <div className="CreateForm-Container">
  <Errors 
   errors = {this.props.errors}
  />
          <div className="lds-facebook"><div></div><div></div><div></div></div>
            <h1 className="CreateForm-Header">Publish your Shot</h1>

            <div className="NAV-BAR">
            <a href="https://www.linkedin.com/in/lam-vu-4b49a5117/">
              <i id="linkedin" className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/LamVu1" target="_blank">
              <i id="github" className="fab fa-github"></i>
            </a>
            <a href="https://angel.co/lam-vu-2" target="_blank">
              <i id="angellist" className="fab fa-angellist"></i>
            </a>     
		      </div>

            <form className="CreateForm" onSubmit={this.handleSubmit}>

                
                <div className="box-dragndrop" onDrop={this.handleDrop}  onDragEnter={this.onDragEnter}
                  onDragOver={this.onDragOver}>
                

                {(this.state.image == null) 

                  ? <div className="Input-Box" style={{display :'flex'}}>
                      <i className="fas fa-cloud-upload-alt"></i>
                      <h1>Drag and drop an image</h1>
                      <p>or browse to choose a file</p> 
                  
                      <input type="file" onChange={this.handleFile}/>
                    </div>
              
                  :
                  <div className="Sucess">

                    <i className="far fa-check-circle"></i>
                      <h1>Sucess!</h1>
                      </div>
                
                }
                
                     </div>

              
               
              

                <div className="Form-Text">
                 
                    <label> Title:
                       
                        <input className="Form-Input" type="text" placeholder="Add a Title" value={this.state.title} onChange={this.handleUpdate("title")} maxLength="50"/>

                    </label>
                    
                    <label> Description:

                        <textarea className="Form-Input"  type="text" placeholder="Tell us about your work." value={this.state.description} onChange={this.handleUpdate("description")}></textarea>

                    </label>
                    {(this.state.image == null) 
                      ? <div></div>
                      : <div className="Preview-Container">
                        <p>Preview: </p>
                        <img className="Preview" src={this.preview}/>
                        <button onClick={this.removeImage}>Delete Image</button>
                        </div>
                    }

                    {
                      this.state.message !== ''
                    ? 
                    <div className='Form-Error-Message'>
                      <button onClick={this.handleMessage}>x</button>
                      <p>{this.state.message}</p>
                    </div>
                    :null
                    }
                </div>
                <div className="Form-footer">
                  <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>

                    <button className="publish-button" onClick={this.handleSubmit}>
                      <input type="submit" value="Publish"/>
                    </button>

                </div>
              

            

            </form>
        </div>
    )
  }
}



const mapStateToProps = state => {
    
    return(
        {   
            post: {title:"", description:""},
            errors: state.errors.post
    
        }
    )
}

const mapDispatchToProps = dispatch => {
    
    return(
        {
            createPost: (formData) => dispatch(createPost(formData)),
            clearErrors: () => dispatch( clearErrors()),
            toggleLoader: () => dispatch(toggleLoader())


        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePostForm);
