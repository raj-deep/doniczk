import { Fragment, useState, useRef } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import DoniczkowcyLogo from '../../assets/logo.png';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Logo,
  Main,
  FlexGrow,
  CartPosition,
  DropdownMenu,
  DropdownMenuItem,
  NavLinkItem
} from './navigation.styles';
import Footer from '../footer/footer.component';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleDropdownItemClick = (event) => {
    const parentItem = event.target.parentNode;
    if (parentItem.classList.contains('has-submenu')) {
      parentItem.classList.toggle('open');
      const isExpanded = parentItem.classList.contains('open');
      event.target.setAttribute('aria-expanded', isExpanded.toString());
    }
  };

  return (
    <Fragment>
      <FlexGrow>
        <NavigationContainer>
          <LogoContainer to='/doniczk'>
            <Logo src={DoniczkowcyLogo} className='logo' alt="logo doniczkowcy"/>
          </LogoContainer>
          <NavLinks>
            <NavLinkItem className='dropdown-menu'>
              <NavLink
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-label="SKLEP - Otwórz menu"
                title="Sklep"
                onClick={handleToggleDropdown}
              >
                SHOP
              </NavLink>
              {dropdownOpen && (
                <DropdownMenu
                  role="menu"
                  tabIndex="-1"
                  ref={dropdownRef}
                  onBlur={() => setDropdownOpen(false)}
                >
                  <DropdownMenuItem>
                    <NavLink to='/sklep/plant' onClick={handleDropdownItemClick}>PLANTS</NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <NavLink to='/sklep/seedlings' onClick={handleDropdownItemClick}>SEEDLINGS</NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <NavLink to='/sklep/soil' onClick={handleDropdownItemClick}>SAND</NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <NavLink to='/sklep/pots' onClick={handleDropdownItemClick}>POTS</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <NavLink to='/sklep/accessories' onClick={handleDropdownItemClick}>ACCESSORIES</NavLink>
                  </DropdownMenuItem>
                  
                </DropdownMenu>
              )}
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to='/kontakt'>CONTACT</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to='/mojekonto'>MY ACCOUNT</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <CartPosition>
                <CartIcon />
                {isCartOpen && <CartDropdown />}
              </CartPosition>
            </NavLinkItem>
          </NavLinks>
        </NavigationContainer>
        <Main>
          <Outlet />
        </Main>
      </FlexGrow>
      <Footer />
    </Fragment>
  );
};

export default Navigation;
