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

export const PORTFOLIO_ICON: JSX.Element = (
  <BurstModeOutlinedIcon />
);

export const IPHONE_ICON: JSX.Element = (
  <PhoneIphoneIcon />
);

export const MENU: JSX.Element = (
  <Icon className="menu-core-icon">menu</Icon>
);

export const TOP_DRAWER_MENU = [
  {
    icon: <HomeIcon />,
    label: 'Home',
    pathname: '/',
  },
  {
    icon: PORTFOLIO_ICON,
    label: 'Portfolio',
    pathname: '/portfolio',
  },
  {
    icon: <StorefrontOutlinedIcon />,
    label: 'Services',
    pathname: '/services',
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