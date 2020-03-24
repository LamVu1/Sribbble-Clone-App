import React from 'react';
import { connect } from 'react-redux';

class Loader extends React.Component{
    constructor(){
        super()
    }

    render(){

        const {ui} = this.props
    

    return(
        <div>
            {ui
            ?
            <div className='loader-container'>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>

            : null
            
            }

        </div>
    )
    }
}

const mapStateToProps = (state)=>{
    
   return(
       {ui: state.ui.modal.loader}
   )
  }



export default connect(mapStateToProps, null)(Loader);