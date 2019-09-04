import {
  SEARCH_DOMAIN_SUCCESS,
  SEARCH_DOMAIN_START,
  SEARCH_DOMAIN_ERROR
} from '../actions/actionTypes';

const initialState = {
  domains: JSON.parse(localStorage.getItem('domains')) || [],
}

export default function domainReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_DOMAIN_START:
      return {
        ...state, loading: true
      }
    case SEARCH_DOMAIN_SUCCESS:
      return {
        ...state, loading: false, domains: action.domains
      }
    case SEARCH_DOMAIN_ERROR:
      return {
        ...state, loading: false
      }
    default:
      return state
  }
}