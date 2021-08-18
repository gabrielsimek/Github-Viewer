export const FETCH_USER = 'FETCH-USER';
export const getUser = (user) => {
  return {
    type: FETCH_USER,
    payload: user
  };
};
