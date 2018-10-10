import { combineReducers } from "redux";
import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import { GET_BANNERS, GET_DESTINATIONS, GET_REVIEWERS } from "../actions";

const databanners = (
  state = {
    isFetching: false,
    items: []
  },
  actions
) => {
  switch (actions.type) {
    case `${GET_BANNERS}_PENDING`:
      return {
        ...state,
        isFetching: true
      };

    case `${GET_BANNERS}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        items: actions.payload
      };

    case `${GET_BANNERS}_REJECTED`:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
};

const datadestinations = (
  state = {
    isFetching: false,
    items: []
  },
  actions
) => {
  switch (actions.type) {
    case `${GET_DESTINATIONS}_PENDING`:
      return {
        ...state,
        isFetching: true
      };

    case `${GET_DESTINATIONS}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        items: actions.payload
      };

    case `${GET_DESTINATIONS}_REJECTED`:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
};

const datareviewers = (state = {
  isFetching: false,
  items: []
}, actions) => {
  switch (actions.type){
    case `${GET_REVIEWERS}_PENDING`:
      return {
        ...state,
        isFetching: true
      }

    case `${GET_REVIEWERS}_FULFILLED`:
      return {
        isFetching: false,
        items: actions.payload
      }

    case `${GET_REVIEWERS}_REJECTED`:
      return {
        ...state,
        isFetching: false
      }

    default: 
      return state
  }
}

const rootReducer = combineReducers({
  databanners,
  datadestinations,
  datareviewers
});

export default rootReducer;
