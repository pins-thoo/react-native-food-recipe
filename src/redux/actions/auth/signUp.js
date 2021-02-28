export const NAME = 'AUTH';

export const SIGN_UP_REQUEST = `${NAME}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${NAME}/SIGN_UP_SUCCESS`;
export const SIGN_UP_FAIL = `${NAME}/SIGN_UP_FAIL`;

export const signUp = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpFail = (error) => ({
  type: SIGN_UP_FAIL,
  error,
});
