import styled from 'styled-components';
import theme from 'styled-theming';

import {
  Navbar as NavbarBt,
  CustomInput,
  NavLink,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import { cardBackgroundColor, color, background, toRgb } from '../../themes';

export const langNavLinkColor = theme('mode', {
  light: toRgb(color.light.darkest),
  dark: toRgb(color.dark.lightest)
});

export const Navbar = styled(NavbarBt)`
  background-color: ${cardBackgroundColor};
  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.2);
  padding: 0.1rem 1rem 0 1rem !important;
  position: relative;
  z-index: 2;
`;

export const ChangeTheme = styled.div`
  display: inline-flex;

  svg {
    margin-top: 3px;
  }
`;

export const ToggleTheme = styled(CustomInput)`
  .custom-control-input ~ .custom-control-label::before {
    background-color: ${background.dark.normal};
    border-color: ${background.dark.dark};
  }

  .custom-control-input:not(:disabled):active ~ .custom-control-label::before {
    background-color: ${color.light.light};
    border-color: ${color.light.light};
  }

  .custom-control-input:checked ~ .custom-control-label::before {
    background-color: ${color.light.normal};
    border-color: ${color.light.normal};
  }

  .custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
    border-color: ${color.light.dark};
  }

  .custom-control-input:focus ~ .custom-control-label::before {
    box-shadow: 0 0 0 0.2rem rgba(${toRgb(color.light.lighter)}, 0.3);
  }
`;

export const LangNavLink = styled(NavLink)`
  color: rgba(${langNavLinkColor}, 0.5) !important;

  &:hover {
    color: rgba(${langNavLinkColor}, 0.85) !important;
  }
  &.active {
    color: rgba(${langNavLinkColor}, 1) !important;
  }
`;

export const userButtonColor = theme('mode', {
  light: toRgb(color.light.lighter),
  dark: toRgb(color.dark.dark)
});

export const userIconColor = theme('mode', {
  light: toRgb(color.light.darkest),
  dark: toRgb(color.dark.lightest)
});

export const UserLogged = styled(DropdownToggle)`
  display: inline-block;
  width: 26px;
  height: 26px;
  margin: 4px 4px 4px 20px;
  background-color: rgba(${userButtonColor});
  color: rgba(${userIconColor});
  border-radius: 50%;
  text-align: center;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: rgba(${userButtonColor}, 0.5);
  }
`;

export const UserLoggedMenu = styled(DropdownMenu)`
  transform: translate3d(-94px, 30px, 0px);
`;
