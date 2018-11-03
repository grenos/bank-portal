import React from 'react';
import { useSetState } from 'react-use';
import { axiosPost } from '../../hooks/axiosHook';
import axios from 'axios';

const Pay = () => {
  const [state, setState] = useSetState({
    name: '',
    surname: '',
    iban: '',
    amount: ''
  });

  const handleNameChange = e => {
    setState({
      name: e.target.value
    });
  };
  const handleSurnameChange = e => {
    setState({
      surname: e.target.value
    });
  };
  const handleIbanChange = e => {
    setState({
      iban: e.target.value
    });
  };
  const handleAmountChange = e => {
    setState({
      amount: e.target.value
    });
  };

  const handleSubmit = state => {
    axios.post('data/data.json', { state }).then(res => {
      console.log(res);
    });
    console.log(state);
  };
  //
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">
          Name
          <input type="text" value={state.name} onChange={handleNameChange} />
        </label>
        <br />

        <label htmlFor="Surname">
          Surname
          <input
            type="text"
            value={state.surname}
            onChange={handleSurnameChange}
          />
        </label>
        <br />

        <label htmlFor="IBAN">
          IBAN
          <input type="number" value={state.iban} onChange={handleIbanChange} />
        </label>
        <br />

        <label htmlFor="Amount">
          Amount
          <input
            type="number"
            value={state.amount}
            onChange={handleAmountChange}
          />
        </label>
        <br />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Pay;
