import React, { Component } from 'react'

const OtakuContext = React.createContext({
  test: "Context is working",
});

export default OtakuContext;

export class OtakuProvider extends Component {
  state = {
    test: "Context is working",
  };

  render() {
    const value = {
      test: this.state.test,
    }
    return (
      <OtakuContext.Provider value={value}>
        {this.props.children}
      </OtakuContext.Provider>
    )
  }
}