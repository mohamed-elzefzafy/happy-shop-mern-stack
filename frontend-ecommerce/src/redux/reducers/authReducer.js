import { FORGET_PASSWORD, GET_CURRENT_USER, LOGIN, REGISTER, RESET_PASSWORD, VERIFY_RESET_CODE, VERIFY_RESET_PASSWORD } from "../type";

const inital = {
  registerUser: [],
  loginUser: [],
  currentUser: [],
  forgetPassword: [],
  verifyCode: [],
  verifyPassword: [],
  loading: true,
};
const authReducer = (state = inital, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registerUser: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        loginUser: action.payload,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case FORGET_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
      };

      case VERIFY_RESET_CODE:
        return {
          ...state,
          verifyCode: action.payload,
        };
        case RESET_PASSWORD:
          return {
            ...state,
            verifyPassword: action.payload,
          };
    
  

    default:
      return state;
  }
};

export default authReducer;
