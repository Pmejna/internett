import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';

const CardPackageWrapper = styled.div`
    background-color: #fff;
    box-shadow: var(--main-shadow);
    min-height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CardPackageLabel = styled.div`

`;

const CardPackageInfo = styled.div`

`;

const PackageSpeed = styled.div`

`;

const PackagePerk = styled.div`

`;

const  PackagePrice = styled.div`

`;



const CardPackage = ({data}) => {
    const {name, speed, perks, price} = data;
    return (
        <CardPackageWrapper>
            <CardPackageLabel>
                <h3>
                    <span>Internet światłowodowy</span>
                    <span className="bigFont">pakiet {name}</span> 
                </h3>
                <p></p>
                <h3>pakiet {name}</h3>
            </CardPackageLabel>
            <CardPackageInfo>
                <PackageSpeed>
                    <p>prędkość:<span>{speed}</span></p>
                </PackageSpeed>
                <PackagePerk>
                    {perks.map(perk => <p key={perk.key}>{perk.perk}</p>)}
                </PackagePerk>
                <PackagePrice>
                    <p>Od</p>
                    <p className='price'>{price}</p>
                    <span>miesięcznie</span>
                </PackagePrice>
            </CardPackageInfo>
            <Button></Button>
        </CardPackageWrapper>
    )
};

export default CardPackage