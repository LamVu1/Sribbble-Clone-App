import React from 'react';
import { connect, withRouter } from 'react-redux';
import {clearErrors } from '../../reducers/session/session_actions';



class ErrorsIndex extends React.Component{
    constructor(props) {
        super(props);
        // this.state ={errors: []}
        this.close = this.close.bind(this)
    }


    // componentDidMount(){
    //     this.setState({errors: this.props.error})
    // }

    close(){
        this.props.clearErrors()
    }


    render(){

        let ErrorMessage;
        
        let {errors} = this.props
        
        // if(this.state.errors ===undefined){
        //     return null
        // }
        
        if(errors.length > 0){
            let banner=document.getElementsByClassName('Errors-Banner')
            banner[0].style.display = "block";
            ErrorMessage=
            <div>
                <button className="Close-Bannerbtn" onClick={this.close}>X</button>
                <h1>Please enter the correct information:</h1>
                <ul className='Errors-Container'>
                    {errors.map((error, i) => (

                    <li className='eerrors' key={`error-${i}`}>
                    
                        {error}

                    </li>

                    ))}
                </ul>
            </div>
          
        }
    
        return(
            <div className="Errors-Banner">
                
              {ErrorMessage}
            </div>
        )
    }
}






const mapStateToProps=(state)=>{
    
    return(
        {
          errors: state.errors
        }
    )
}

const mapDispatchToProps=dispatch=>{
    
    return(
        {
            clearErrors: ()=>dispatch(clearErrors())
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsIndex)
