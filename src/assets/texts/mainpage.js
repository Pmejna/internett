import image1 from '../images/coffeeTime.jpeg';
import image2 from '../images/badWeatherWork.jpeg';
import lines1 from '../images/Group 15.png';
import lines2 from '../images/Group 16.png';

const mainSlide = {
    mainText: `internet światłowodowy`,
    subText: 'Dla Ciebie i Twoich bliskich juz od ',
    priceText: `99zł`,
    buttonText: `zobacz ofertę dla domu`,
    aboveText: `nowość!`
};

const mainParagraph = `Zapraszamy do zapoznania się z nasza ofertą dostarczenia internetu światłowodowego. 
Operujemy tylko na sprzęcie najwyższej klasy, a nasza sieć jest niezawodna ze względu na wysoką jakość jej  wykonania. 
Od 2015 roku sukcesywnie rozbudowujemy naszą infrastrukturę doprowadzając kabel światłowodu bezpośrednio do budynku klienta na terenie powiatu nadarzyńskiego i nie tylko. 
Internet światłowodowy to aktualnie najkorzystniejsza użytkowa technologia dostarczająca sygnał bezpośrednio do domu zamawiającego usługę podłączenia do sieci internet.`;

const boxSection = {
    box_data: {
        header: `Internet światłowodowy`,
        paragraph: `To rozwiązanie technologiczne, w przeciwieństwie do na przykład internetu mobilnego, szczyci się bardzo wysoką odpornością na warunki atmosferyczne,
         które mogą wpływać na jakość odbieranego sygnału, zatem i na komfort w odbiorze treści pozyskanych przez sieć. Dzięki internetowi światłowodowym streaming
          filmów i treści jest stabilny a jakość grania w opcjach multiplayer płynna i bez opóźnień. Wysoka jakość odbioru treści jest możliwa dzięki bardzo niskiej
           prędkości opóźnień odbioru treści, która wynosi 0,16 milisekundy. Najwyższa jakość filmów i seriali jest możliwa dzięki bardzo wysokiej prędkości, zatem
            możliwości przepustowych sieci, w przypadku pobierania danych. Prędkość internetu światłowodowego wynosi nawet 1 gigabajt na sekundę. 
            Kolejnym bardzo ważnym elementem świadczącym o wysokiej jakości tej technologii jest fakt świadczący o stabilności sieci. 
        `,
        image: image1,
        alt: 'szybki internet światłowodowy to komfort'
    },
    box2_data: {
        header: `Stabilny internet i telewizja na kazdą pogode
        `,
        paragraph: `Mimo ogromnej ilości użytkowników oraz niesprzyjających warunków atmosferycznych zapewniamy, że łącze pozostanie tak samo stabilne i
         stałe w prędkości jak przy małym użytkowaniu sieci przez użytkowników. Jesteśmy absolutnie pewni bezawaryjności naszej sieci internetu światłowodowego.
          Każdy z naszych klientów jest bezpośrednio podłączony do naszego serwera z pominięciem urządzeń aktywnych. Sprawia to, że mamy pełną kontrolę
           technologiczną i możemy szybko reagować na bardzo rzadko występujące awarie czy spadki sygnału. Ze względu na silny sygnał oraz stabilne łącze
            oferujemy również rozszerzenie oferty o założenie usługi odbierającej kanały telewizyjne przez nasz internet światłowodowy.`,
        image: image2,
        alt: `stabilny internet w kazdych warunkach`
    },
};

const mainPageImages = {
    lines1: lines1,
    lines2: lines2,

}

export {mainSlide, mainParagraph, boxSection, mainPageImages}