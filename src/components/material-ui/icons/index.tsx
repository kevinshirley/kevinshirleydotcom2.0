import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import BurstModeOutlinedIcon from '@material-ui/icons/BurstModeOutlined';
import InfoIcon from '@material-ui/icons/Info';
import Icon from '@material-ui/core/Icon';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CodeIcon from '@material-ui/icons/Code';

export const PORTFOLIO_ICON: JSX.Element = (
  <BurstModeOutlinedIcon />
);

export const IPHONE_ICON: JSX.Element = (
  <PhoneIphoneIcon />
);

export const CLOSE_ICON: JSX.Element = (
  <HighlightOffIcon />
);

export const MENU: JSX.Element = (
  <span className="iconify menu-core-icon" data-icon="bx:bx-menu-alt-left" data-inline="false"></span>
);

export const OPEN_IN_NEW_ICON: JSX.Element = (
  <OpenInNewIcon />
);

export const CODE_ICON: JSX.Element = (
  <CodeIcon />
);

export const TOP_DRAWER_MENU = [
  {
    icon: <HomeIcon />,
    label: 'Home',
    pathname: '/',
  },
  {
    icon: <InfoIcon />,
    label: 'About',
    pathname: '/about',
  },
];

export const BOTTOM_DRAWER_MENU = [
  {
    icon: <InfoIcon />,
    label: 'About',
    pathname: '/about',
  },
  {
    icon: <ContactPhoneIcon />,
    label: 'Contact',
    pathname: '/contact',
  },
  {
    icon: <StorefrontOutlinedIcon />,
    label: 'Hire Me',
    pathname: '/hire-me',
  },
];

export const FIRST_HOME_FORM = {
  NAME: <PersonOutlineIcon />,
  EMAIL: <AlternateEmailIcon />,
  PHONE: <PhoneIphoneIcon />,
};

export const FOOTER_SOCIAL_ICON = [
  {
    icon: <GitHubIcon />,
    url: 'https://www.github.com/kevinshirley',
  },
  {
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/kevin-shirley',
  },
];