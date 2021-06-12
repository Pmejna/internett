import React from 'react';
import styled from 'styled-components';
import TvPackagesCard from './TvPackagesCard/TvPackagesCard';

const TvPackagesSectionWrapper = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: ${({optional}) => optional ? "flex-start" : "center"};
    gap: 2rem 3rem;
`;

const TvPackagesSection = ({data, optional}) => {
    console.log(data);
    console.log(data.forEach(element => {
        console.log(element);
    }));
    return (
        <TvPackagesSectionWrapper optional={optional}>
                {
                    data.map(element => <TvPackagesCard data={element} optional={optional}></TvPackagesCard>)
                }
        </TvPackagesSectionWrapper>
    )
};

export default TvPackagesSection;