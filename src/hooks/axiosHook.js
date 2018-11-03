import React, { useEffect, memo } from 'react';
import axios from 'axios';

export const axiosPost = memo(state => {
  //

  useEffect(() => {
    axios.post('data/data.json', { state }).then(res => {
      console.log(res);
    });
  });
});
