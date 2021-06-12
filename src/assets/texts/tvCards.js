import polsat from '../images/polsathd.png';
import tvn from '../images/tvnhd.png';
import tvpInfo from '../images/tvpinfo.png';
import eurosport from '../images/eurosport1.jpg';
import discovery from '../images/discovery.png';
import polsatnews from '../images/polsatnews.png';
import comedyCentral from '../images/comedycentral.png';
import fox from '../images/fox.png';
import disneychanell from '../images/disneychanell.png';
import natgeo from '../images/nat-geo.jpg';
import domo from '../images/domo.png';
import bbc from '../images/bbc.jpg';


export const tvPackagesData = [
    {
            title: "mini",
            cost: "30zł",
            channelsNumber: 101,
            hdChannels: 60,
            text: "Standardowa oferta:",
            textSpan: "101 kanałów",
            activationCost: "365zł",
            image1: polsat,
            image2: tvn,
            image3: tvpInfo,
    },
    {

            title: "smart",
            cost: "60zł",
            channelsNumber: 147,
            hdChannels: 95,
            text: "Mini + ",
            textSpan: "46 kanałów",
            activationCost: "0zł",
            image1: eurosport,
            image2: discovery,
            image3: polsatnews,
    },
    {
            title: "optimum",
            cost: "70zł",
            channelsNumber: 195,
            hdChannels: 125,
            text: "Mini + Smart + ",
            textSpan: "46 kanałów",
            activationCost: "0zł",
            image1: comedyCentral,
            image2: fox,
            image3: disneychanell,
    },
    {
            title: "platinum",
            cost: "100zł",
            channelsNumber: 231,
            hdChannels: 151,
            text: "Mini + Smart + Optimum +",
            textSpan: "36 kanałów",
            activationCost: "0zł",
            image1: natgeo,
            image2: domo,
            image3: bbc,
    }
];

export const tvPremiumData = [
    {
        title: "Cinemax",
        cost: "14,90zł",
        channels: ["Cinemax HD", "Cinemax2 HD"],
    },
    {
        title: "HBO",
        cost: "29,90zł",
        channels: ["HBO HD", "HBO2 HD", "HBO3 HD"],        
    },
     {
        title: "Canal+",
        cost: "69,90zł",
        channels: ["Canal+ Premium HD", "Canal+ 1 HD", "Canal+ Film HD", "Canal+ Dokument HD", "Canal+ Family HD", "Canal+ Seriale HD", "Canal+ Sport HD", "Canal+ Sport 2 HD"],
    }
];