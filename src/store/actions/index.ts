export function createTypes(base, types) {
  const res = {};
  types.forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const action = (type: any, payload = {}, meta = {}) => ({
  type,
  payload,
  meta,
});

export const UI: any = createTypes('UI', [
  'OPEN_MODAL',
  'CLOSE_MODAL',
  'OPEN_SCHEDULE_MODAL',
  'CLOSE_SCHEDULE_MODAL',
  'IS_MODAL_OPENED',
  'SELECT_PORTFOLIO',
]);

export const ui = {
  openModal: () => action(UI.OPEN_MODAL),
  closeModal: () => action(UI.CLOSE_MODAL),
  setModalOpened: () => action(UI.IS_MODAL_OPENED),
  openScheduleModal: () => action(UI.OPEN_SCHEDULE_MODAL),
  closeScheduleModal: () => action(UI.CLOSE_SCHEDULE_MODAL),
  selectPortfolio: (index: number) => action(UI.SELECT_PORTFOLIO, index),
};
