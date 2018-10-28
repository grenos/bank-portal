import React, { Component } from 'react';
import { AppContext } from '../../provider/StateProvider';
import './dashboard.css';

export default class Dashboard extends Component {
  render() {
    //
    return (
      <div className="card">
        <AppContext.Consumer>
          {context => (
            <div>
              <h1>
                {context.person.name}
                <br />
                {context.person.surname}
              </h1>
              {context.person.transactions !== undefined
                ? context.person.transactions.incoming.map((data, i) => {
                    return (
                      <div>
                        <h2 key={i}>{data.name}</h2>
                        <h2 key={i}>{data.amount}</h2>
                      </div>
                    );
                  })
                : null}
            </div>
          )}
        </AppContext.Consumer>
      </div>
    );
  }
}
