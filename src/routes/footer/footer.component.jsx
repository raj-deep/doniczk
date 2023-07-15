import {
  FooterLogo,
  FooterContainer,
  FooterWrapper,
  FooterMenuList,
  FooterMenuListItem,
  FooterMenus,
  FooterText,
  FooterColumns,
  FooterCopy
} from './footer.styles';
import DoniczkowcyLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumns>
          <div>
            <FooterLogo src={DoniczkowcyLogo}/>
            <FooterText>Bring plants into your space and feel connected to nature.</FooterText>
          </div>
        
        <FooterMenus>
          <FooterMenuList>
            <FooterMenuListItem><Link to="/sklep">Store</Link></FooterMenuListItem>
            <FooterMenuListItem><Link to="/kontakt">Contact</Link></FooterMenuListItem>
          </FooterMenuList>
          <FooterMenuList>
            <FooterMenuListItem><Link to="/sklep">Store</Link></FooterMenuListItem>
            <FooterMenuListItem><Link to="/mojekonto">My Account</Link></FooterMenuListItem>
            <FooterMenuListItem><Link to="/kasa">Cart</Link></FooterMenuListItem>
          </FooterMenuList>
          <FooterMenuList>
            <FooterMenuListItem><a href="https://www.instagram.com/">Instagram</a></FooterMenuListItem>
            <FooterMenuListItem><a href="https://www.facebook.com/">Facebook</a></FooterMenuListItem>
            <FooterMenuListItem><a href="https://www.tiktok.com/">TikTok</a></FooterMenuListItem>
          </FooterMenuList>
        </FooterMenus>
        </FooterColumns>

        
        </FooterWrapper>
        
        <FooterCopy>
          <p>Copyright © 2023 black pixel | All Rights Reserved</p>
        </FooterCopy>
    </FooterContainer>
  )
}

export default Footer