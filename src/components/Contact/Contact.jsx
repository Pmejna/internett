import React from 'react';
import styled from 'styled-components';
import logoImg from '../../assets/images/Logo.svg';
import phoneIcon from '../../assets/images/PhoneIcon.svg';
import footerBg from '../../assets/images/ContactGraphic.png';

const ContactSection = styled.section`
    padding: var(--main-padding);

    h2, p {
        text-align: center;
    }
    @media (max-width: 780px) {
        padding: 1rem 10vw 3rem;
        
     }
`;

const ContactFooter = styled.footer`
    width: 100%;
    height: auto;
`;

const FooterHead = styled.div`
    width: 100%;
    background-color: #F1F1F1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: var(--main-padding);
    min-height: 7rem;

    @media (max-width: 780px) {
        padding: var(--main-padding-mobile);
        padding-top: 2rem;
        padding-bottom: 2rem;
        flex-wrap: wrap;
    }
`;

const Logo = styled.img`
    width: 11rem;
    height: auto;
    background-color: transparent;

    @media (max-width: 780px) {
        flex-basis: 100%;
        /* height: 4rem; */
        width: auto;
        height: 5rem;
        padding-right: 100px;
        padding-bottom: 1.4rem;
    }
`;

const PhoneNumbers = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: none;
        color: var(--main-dark);
        font-size: 2.2rem;
        font-weight: 500;
        margin-left: 2rem;
    }

    @media (max-width: 780px) {
        img {
            height: 2rem;
        }
    }
`;



const FooterData = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 2fr;
    grid-gap: 2rem;
    padding: var(--main-padding);
    padding-top: 3rem;
    background-color: #000;
    color: #fff;

    @media (max-width: 780px) {
        padding: var(--main-padding-mobile);
        padding-top: 2.4rem;
        grid-template-columns: minmax(250px, 350px);
        grid-template-rows: repeat(4, auto) 80px;
    }
    
`;


const FooterDataBox = styled.div`
    h4 {
        font-size: 1.8rem;
    }

    span {
        font-weight: 500;
    }
`;

const Footer = styled.div`
width: 100%;
background-color: #fff;

    .redBar {
        width: 100%;
        height: 2rem;
        background-color: var(--main-red);
    }
    .footer {
        width: 100%;
        padding: var(--main-padding);
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        
        p {
            font-weight: 500;
        }

        @media (max-width: 780px) {
        padding: 1.4rem 10vw;
     }
    }
`;

const FooterImage = styled.img`
    position: absolute;
    bottom: 1rem;
    left: 0;
`;

const Contact = ({zasieg}) => {

    return (
        <>  
        {
            zasieg ? null : <ContactSection id='kontakt'>
                <h2>Kontakt w sprawie internetu światłowodowego</h2>
                <p>Mamy nadzieję, że zauważyłeś, że jesteśmy pewni siebie i pewni sieci którą sukcesywnie tworzymy w Twojej okolicy od lat. Zapraszamy do kontaktu. Jesteśmy małą, lokalną polską firmą, która skupia się na naszych klientach w sposób indywidualny. Zapewniamy nie tylko najwyższą jakość łącza internetu światłowodowego, ale również indywidualną opiekę, która różni nas od wielkich dostawców tej samej technologii na rynku polskim.</p>
            </ContactSection>
        }
            
            <ContactFooter>
                <FooterHead>
                    <Logo src={logoImg}/>
                    <PhoneNumbers>
                        <img src={phoneIcon} alt=""/>
                        <a href="tel:+44774564634">0774 564 634</a>
                    </PhoneNumbers>
                </FooterHead>
                <FooterData>
                    <FooterDataBox>
                        <h4>Adres</h4>
                        <p>ul. Sadowa 1</p>
                        <p>05-090 Sękocin Nowy</p>
                    </FooterDataBox>
                    <FooterDataBox>
                        <h4>Email</h4>
                        <p>biuro@internett.pl</p>
                    </FooterDataBox>
                    <FooterDataBox>
                        <h4>Nip</h4>
                        <p>522-174-62-78</p>
                    </FooterDataBox>
                    <FooterDataBox>
                        <h4>Godziny pracy:</h4>
                        <p>poniedziałek-piątek: <span>8 - 16</span></p>
                        <p>sobota: <span>10 - 14</span></p>
                    </FooterDataBox>
                    <FooterImage src={footerBg}></FooterImage>
                </FooterData>
                <Footer>
                    <div className="redBar"></div>
                    <div className="footer">
                        <p className="copyright">Copyright 2021</p>
                        <p>www.internett.pl</p>
                    </div>
                </Footer>
            </ContactFooter>
        </>
    )
};

export default Contact