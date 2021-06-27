import React from 'react';
import styled from 'styled-components';
import bgImage from "../assets/images/voip-bg.png";
import MainSlide from '../components/MainSlide/MainSlide';
import AboutSection from '../components/AboutSection/AboutSection';
import {aboutData as data} from '../assets/texts/aboutUs';
import PageSEO from '../components/PageSEO';
import { voipSeo } from '../assets/texts/seoText';

const SectionVoip = styled.section`
  padding: 0!important;
  
  p {
      text-align: center;
  }

    .redBar {
        width: 100%;
        height: 1rem;
        background-color: #f1f1f1;
    }
`;


const GraySection = styled.section`
    padding-top: 2rem;
    background-color: #f1f1f1;
    color: #000;

    span.red {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 2rem;
    }
    p.red {
        margin-bottom: 1.2rem;
    }
    span.underline {
        text-decoration: underline;
    }
    margin-bottom: 3rem;
`;

// import 
const OnasPage = () => {
    return (
    <>
        <PageSEO title={voipSeo.title} description={voipSeo.description}/>
        <MainSlide mainText='Telefon VOIP' image={bgImage}/>
        <SectionVoip id='onas'>
            <section>
                <p>W związku z tym, że szczycimy się bardzo wysoką jakością wykonania i ułożenia sieci internetu światłowodowego oferujemy dla firm oraz klienta indywidualnego korzystanie z technologii VoIP. Co to jest? Rozwinięcie skrótu oznacza dokładnie: Voice Over internet Protocol. To technologia umożliwiającą wysyłanie głosu przez łącze internetowe. Jest to unowocześniona technologia zwykłego telefonu naziemnego. Popularnie jest to nazywane telefonią internetową. </p>
                <br/>
                <p>Jakie są zalety użytkowania tej technologii przez stworzoną przez nas sieć światłowodową? To proste. W porównaniu do innych operatorów, użytkowanie telefonu przez naszą platformę znacznie obniży koszta użytkowania usługi telefonii tradycyjnej. Polecamy dwóch operatorów sieci telefonii przez internet światłowodowy. Są to odpowiednio: IPFON oraz EASYCALL. </p>
            </section>
            <div className='redBar'></div>
            <GraySection>
                <p className="red"><span className='red'>Uwaga</span></p>
                <p>
                    Ze względu na dużą ilość zapytań ze storny naszych klientów, uprzejmie informujemy, że od teraz nasza <span className='underline'>firma umożliwia</span> PRZENIESIENIE DOTYCHCZASOWEGO NUMERU STACJONARNEGO Z LINII ANALOGOWEJ na nowoczesną technologię VoIP. Nie muszą się już Państwo martwić, o to, że stary numer stanie się nieaktualny, a daleka rodzina, która nadal wybiera taką formę kontaktu zostanie od Państwa odłączona. Aby poznać więcej 
                    szczegółów na temat metody przeniesienie usług analogowych na VoIP, skontaktuj się z technikami firmy internett.pl 
                </p>
            </GraySection>
        </SectionVoip>
    </>
    )
};

export default OnasPage