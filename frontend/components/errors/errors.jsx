import React from 'react';
import {withRouter} from 'react-router-dom';
import {calcTime} from '../../utils/calculate_time';

class ErrorsIndex extends React.Component{
    constructor(props) {
        super(props);
        this.close = this.close.bind(this)
                
    }

    close(){
        this.props.clearErrors()
    }

    render(){

        let ErrorMessage;
        if(this.props.errors.length !== 0){
            let banner=document.getElementsByClassName('Errors-Banner')
            banner[0].style.display = "block";
            ErrorMessage=
            <div>
                <h1>Please enter the correct information:</h1>
                <button className="Close-Bannerbtn" onClick={this.close}>X</button>
                <ul className='Errors-Container'>
                    {this.props.errors.map((error, i) => (

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

export default withRouter(ErrorsIndex);