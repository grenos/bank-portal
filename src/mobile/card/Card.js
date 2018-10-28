import React, { Component } from 'react';
import { AppContext } from './StateProvider';
import './card.css';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1>
          <AppContext.Consumer>{context => context.letter}</AppContext.Consumer>
        </h1>
      </div>
    );
  }
}
