import React from 'react';
import {Link} from 'react-router-dom';

class CreatePostForm extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {title:'', description:'', image:null};
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
    const formData = new FormData() ;
    formData.append('post[title]', this.state.title);
    formData.append('post[description]', this.state.description);
    formData.append('post[image]', this.state.image);
    
    this.props.createPost(formData).then(()=> this.props.history.push('/'))
  }

  handleFile(e){  
    let loader = document.getElementsByClassName('lds-ring')
    loader[0].style.display = "block"
    setTimeout(function(){  loader[0].style.display = "none" }, 4000);
    this.setState({image: e.currentTarget.files[0]});
    let Sucess = document.getElementsByClassName('Sucess')
    setTimeout(function(){  Sucess[0].style.display = "block" }, 4000);
    // let preview = document.getElementsByClassName('Preview')
    var file= document.querySelector('input[type=file]').files[0];
    debugger
    this.preview = URL.createObjectURL(file)
    // preview.src = URL.createObjectURL(file)
    // var reader  = new FileReader();
    // reader.readAsDataURL(file);
    // reader.addEventListener("load", function () {
    //   debugger
    //   preview.src = reader.result;
    // }, true);
  }


  handleDrop(e){  
    e.preventDefault()
    e.stopPropagation()
    this.setState({image: e.dataTransfer.files[0]});
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

                  ? <div className="Input-Box">
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
                       
                        <input className="Form-Input" type="text" placeholder="Add a Title" value={this.state.title} onChange={this.handleUpdate("title")} />

                    </label>
                    
                    <label> Description:

                        <textarea className="Form-Input"  type="text" placeholder="Tell us about your work." value={this.state.description} onChange={this.handleUpdate("description")}></textarea>

                    </label>
                    {(this.state.image == null) 
                      ? <div></div>
                      : <div>
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
