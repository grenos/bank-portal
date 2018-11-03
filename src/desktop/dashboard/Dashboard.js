import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../provider/StateProvider';
import { Spring, config } from 'react-spring';
// import _ from 'lodash';
import { Elastic, Power3 } from 'gsap/all';

import './dashboard.css';
import Pay from '../makePayment/Pay';
import Girl from '../../svg/Girl';
var accounting = require('accounting');

const Dashboard = () => {
  //
  const user = useContext(UserContext);

  //
  // set up a state only for window width
  const [width, setWidth] = useState(window.innerWidth);
  // use the hook
  useEffect(() => {
    // declare the function and set to state
    const handleResize = () => setWidth(window.innerWidth);
    // add listener for window width on resize
    window.addEventListener('resize', handleResize);
    // optionally return a function to clean up after component does unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  //

  return (
    <>
      <div className="card">
        <Girl />
        <h1>
          {user.person1.name}
          <br />
          {user.person1.surname}
        </h1>

        {user.person1.transactions !== undefined
          ? user.person1.transactions.incoming.map((data, i) => {
              return (
                <div key={i}>
                  <h2>{data.name}</h2>

                  <Spring
                    config={{ tension: 1, friction: 2, precision: 0.1 }}
                    from={{ number: 0 }}
                    to={{ number: `${data.amount}` }}
                    delay={500}
                  >
                    {props => (
                      <h2>
                        {accounting.formatMoney(
                          `${Math.floor(props.number) / 100}`,
                          '€',
                          2,
                          ','
                        )}
                      </h2>
                    )}
                  </Spring>
                </div>
              );
            })
          : null}
        <div>
          <h1>
            {user.person2.name}
            <br />
            {user.person2.surname}
            <br />
            <p>Window Width</p>
            {width}
          </h1>
        </div>
        <br />
        <Pay />
      </div>
    </>
  );
};

export default Dashboard;
