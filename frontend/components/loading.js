import { css } from '@emotion/core';

import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class AwesomeComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      }
    }
    render() {
      return (
        <div className='sweet-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={this.state.loading}
          />
        </div> 
      )
    }
  }

  export default AwesomeComponent;