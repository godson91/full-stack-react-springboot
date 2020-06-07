import React, {Component} from 'react';

 class FirstComponent extends Component {
    render() {
      return (
        <div className="FirstComponent">
          FirstComponent
        </div>
      );
    }
  }

  export function ThirdComponent () {
    return (
      <div className="ThirdComponent">
        3rdComponent
      </div>
    );
}

export default FirstComponent;