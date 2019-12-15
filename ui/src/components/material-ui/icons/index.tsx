import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import BurstModeOutlinedIcon from '@material-ui/icons/BurstModeOutlined';
import InfoIcon from '@material-ui/icons/Info';
import Icon from '@material-ui/core/Icon';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

export const PORTFOLIO_ICON: JSX.Element = (
  <BurstModeOutlinedIcon />
);

export const IPHONE_ICON: JSX.Element = (
  <PhoneIphoneIcon />
);

export const MENU: JSX.Element = (
  <Icon className="menu-core-icon">menu</Icon>
);

export const TOP_DRAWER_MENU = {
  0: <HomeIcon />,
  1: PORTFOLIO_ICON,
  2: <StorefrontOutlinedIcon />,
  3: <InfoIcon />
};

export const BOTTOM_DRAWER_MENU = {
  0: <ContactPhoneIcon />,
  1: <StorefrontOutlinedIcon />,
};