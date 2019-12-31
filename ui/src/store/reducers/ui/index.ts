import { combineReducers } from 'redux';
import { UI } from 'ui/src/store/actions';

function isModalOpened(state = false, { type }) {
  switch (type) {
    case UI.OPEN_MODAL:
      return true;
    case UI.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}

function selectedPortfolio(state = null, { type, payload }) {
  switch (type) {
    case UI.SELECT_PORTFOLIO:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  isModalOpened,
  selectedPortfolio,
});