import Actions from 'actions';

const initialState = Object.freeze({ error: null });

function signUp(state = initialState, action) {
  switch (action.type) {
    case Actions.SIGN_UP:
    case Actions.SIGN_UP_SUCCESS:
      return initialState;
    case Actions.SIGN_UP_FAIL:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}

export default signUp;
