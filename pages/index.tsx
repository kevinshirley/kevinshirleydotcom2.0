import { connect } from 'react-redux';
import HomePage from 'src/components/home';
import storeConnector from 'src/store/selectors/home';
import * as actions from 'src/store/actions';

export default connect(
  storeConnector,
  {
    openModal: actions.ui.openModal,
    selectPortfolio: actions.ui.selectPortfolio,
  },
)(HomePage);