import * as R from 'ramda';
import { createSelector, createStructuredSelector } from 'reselect';

const selectIsModalOpened = R.pathOr('', [
  'ui',
  'isModalOpened',
]);

const selectIsScheduleModalOpened = R.pathOr('', [
  'ui',
  'isScheduleModalOpened',
]);

const selectSelectedPortfolio = R.pathOr('', [
  'ui',
  'selectedPortfolio',
]);

export default createStructuredSelector({
  isModalOpened: selectIsModalOpened,
  isScheduleModalOpened: selectIsScheduleModalOpened,
  selectedPortfolio: selectSelectedPortfolio,
});
