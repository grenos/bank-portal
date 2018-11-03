import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
export const UserContext = React.createContext();

export const StateProvider = memo(props => {
  const [user, setUser] = useState({ person1: {}, person2: {} });

  useEffect(() => {
    axios.get('data/data.json').then(res => {
      let person1 = res.data.person1;
      let person2 = res.data.person2;
      setUser({ person1, person2 });
    });
  }, []);

  const { children } = props;
  //
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
});
