import { connect } from 'react-redux';
import HomePage from 'ui/src/components/home';
import storeConnector from 'ui/src/store/selectors/home';
import * as actions from 'ui/src/store/actions';

export default connect(
  storeConnector,
  {
    openModal: actions.ui.openModal,
    selectPortfolio: actions.ui.selectPortfolio,
  },
)(HomePage);