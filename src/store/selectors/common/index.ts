import * as R from 'ramda';
import { createSelector, createStructuredSelector } from 'reselect';

const selectIsModalOpened = R.pathOr('', [
  'ui',
  'isModalOpened',
]);

const selectSelectedPortfolio = R.pathOr('', [
  'ui',
  'selectedPortfolio',
]);

export default createStructuredSelector({
  isModalOpened: selectIsModalOpened,
  selectedPortfolio: selectSelectedPortfolio,
});
