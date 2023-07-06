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
            <FooterText>Wprowadź do swojej przestrzeni rośliny i poczuj połączenie z naturą.</FooterText>
          </div>
        
        <FooterMenus>
          <FooterMenuList>
            <FooterMenuListItem><Link to="/sklep">Sklep</Link></FooterMenuListItem>
            <FooterMenuListItem><Link to="/kontakt">Kontakt</Link></FooterMenuListItem>
          </FooterMenuList>
          <FooterMenuList>
            <FooterMenuListItem><Link to="/sklep">Sklep</Link></FooterMenuListItem>
            <FooterMenuListItem><Link to="/mojekonto">Moje konto</Link></FooterMenuListItem>
            <FooterMenuListItem><Link to="/kasa">Koszyk</Link></FooterMenuListItem>
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