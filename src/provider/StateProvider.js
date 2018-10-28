import React from 'react';
import axios from 'axios';
export const AppContext = React.createContext();

export class StateProvider extends React.Component {
  state = {
    person: {}
  };

  componentDidMount() {
    axios.get('data/data.json').then(res => {
      let person = res.data.person1;
      this.setState({ person });
    });
  }

  render() {
    console.log(this.state.person);
    //
    const { children } = this.props;
    //
    return (
      <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
    );
  }
}
