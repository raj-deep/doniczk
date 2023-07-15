import {
    ContactContainer, 
    ContactContainerColumns, 
    Address, 
    ContactContainerColumn,
    ContactContainerHorizontal,
    Email,
    PlantImage, Breadcrumbs, Crumb,
} from './contact.styles';

import Rosliny from '../../assets/v986-28.jpg'

const Contact = () => {
  return (
    <ContactContainer>
        <Breadcrumbs>
        <Crumb>
        <a href="/">Shop</a>
        </Crumb>
        <Crumb>
        <a href="/kontakt">Contact</a>
        </Crumb>
    </Breadcrumbs>
        <ContactContainerColumns>
            <ContactContainerColumn>
                <h2>Write to us</h2>
                <p>Doniczkowcy is a place for every plant maniac. Visit our plant shop in Poznań and Kraków or order potted plants online with safe and fast courier shipping.</p>

                <Email>shop@doniczkowcy.pl</Email>

                <ContactContainerHorizontal>
                    <Address>
                        <h3>Shop POZNAŃ</h3>
                        <p>ul. Słonecznikowa 14</p>
                        <p>45-880 Poznań</p>
                        <p>+48 546 236 626</p>
                    </Address>
                    <Address>
                        <h3>Shop KRAKÓW</h3>
                        <p>ul. Fiołkowa 14</p>
                        <p>31-880 Kraków</p>
                        <p>+48 536 536 666</p>
                    </Address>
        
            </ContactContainerHorizontal>
        </ContactContainerColumn>

        <ContactContainerColumn>
            <PlantImage src={Rosliny}/>
        </ContactContainerColumn>
    </ContactContainerColumns>

        
    </ContactContainer>
  )
}

export default Contact