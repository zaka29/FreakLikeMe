import axios from 'axios';

export const getTracks = async seshId => {
  return await axios.get('/user/top/tracks', {
    params: {
      sessionId: seshId,
    },
  });
};

export const getUser = async seshId => {
  return await axios.get('/user/compatibilities', {
    params: {
      sessionId: seshId,
    },
  });
};
