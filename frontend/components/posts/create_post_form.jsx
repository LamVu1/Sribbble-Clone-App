import React from 'react';
import {Link} from 'react-router-dom';
import ErrorsContainer from '../errors/errors_container';


class CreatePostForm extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {title:'', description:'', image:null, errors: []};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.preview = "";
    this.removeImage = this.removeImage.bind(this);
  }

  handleUpdate(field){
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.title==='' || this.state.description===''|| this.state.image===null){
      // this.setState({errors: this.state.errors.push('yes')})
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
    let loader = document.getElementsByClassName('lds-ring')
    loader[0].style.display = "block"
    setTimeout(function(){  loader[0].style.display = "none" }, 3000);
    this.setState({image: e.currentTarget.files[0]});
    let Sucess = document.getElementsByClassName('Sucess')
    setTimeout(function(){  Sucess[0].style.display = "block" }, 3000);
    var file= document.querySelector('input[type=file]').files[0];    
    this.preview = URL.createObjectURL(file)
  }


  handleDrop(e){  
    e.preventDefault()
    e.stopPropagation()

    let loader = document.getElementsByClassName('lds-ring')
    loader[0].style.display = "block"
    setTimeout(function(){  loader[0].style.display = "none" }, 3000);
    this.setState({image: e.dataTransfer.files[0]});
    let Sucess = document.getElementsByClassName('Sucess')
    setTimeout(function(){  Sucess[0].style.display = "block" }, 500);
    var file= e.dataTransfer.files[0];
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

                
  render () {


   
    return (


        <div className="CreateForm-Container">
         
          <div className="lds-facebook"><div></div><div></div><div></div></div>
            <h1 className="CreateForm-Header">Publish your Shot</h1>

            <form className="CreateForm" onSubmit={this.handleSubmit}>

                
                <div className="box-dragndrop" onDrop={this.handleDrop}  onDragEnter={this.onDragEnter}
                  onDragOver={this.onDragOver}>
                 <div className="lds-ring">
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                </div>

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

export default CreatePostForm;
