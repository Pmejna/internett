import React from 'react';
import styled from 'styled-components';
import logoImg from '../../assets/images/Logo.svg';

const ContactSection = styled.section`
    padding: var(--main-padding);

    h2, p {
        text-align: center;
    }
`;

const ContactFooter = styled.footer`
    width: 100%;
    height: auto;
`;

const Logo = styled.img`
    width: 11rem;
    height: auto;
    background-color: transparent;
`;

const FooterHead = styled.div`
width: 100%;
background-color: #000;
`;

const FooterData = styled.div`
width: 100%;
background-color: #000;

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
    }

`;

const Contact = () => {
    const today = new Date();
    return (
        <>
            <ContactSection id='kontakt'>
                <h2>Kontakt w sprawie internetu światłowodowego</h2>
                <p>Mamy nadzieję, że zauważyłeś, że jesteśmy pewni siebie i pewni sieci którą sukcesywnie tworzymy w Twojej okolicy od lat. Zapraszamy do kontaktu. Jesteśmy małą, lokalną polską firmą, która skupia się na naszych klientach w sposób indywidualny. Zapewniamy nie tylko najwyższą jakość łącza internetu światłowodowego, ale również indywidualną opiekę, która różni nas od wielkich dostawców tej samej technologii na rynku polskim.</p>
            </ContactSection>
            <ContactFooter>
                <FooterHead>
                    <Logo src={logoImg}/>
                    <a href="+44774564634">0774 564 634</a>
                </FooterHead>
                <FooterData>

                </FooterData>
                <Footer>
                    <div className="redBar"></div>
                    <div className="footer">
                        <p className="copyright">Copyright {today.getFullYear}</p>
                        <p>www.internett.pl</p>
                    </div>
                </Footer>
            </ContactFooter>
        </>
    )
};

export default Contact