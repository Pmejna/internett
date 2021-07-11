import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import panelKlienta from '../assets/images/panel-image.jpg';
import PageSEO from '../components/PageSEO';
import { panelKlientaSeo } from '../assets/texts/seoText';

const PanelKlientaWrapper = styled.section`
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-image: url(${panelKlienta});
    background-repeat: no-repeat;
    background-size: cover;

    @media(max-width: 760px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 3rem;
    }
`;

const PanelKlientaForm = styled.form`
    position: absolute;
    left: 8rem;
    top: 20vh;
    width: 300px;
    min-height: 400px;
    height: auto;
    padding: 2.4rem;

    h1 {
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    background-color: #fff;
    border: 1px solid #000;

    @media(max-width: 760px) {
        position: static;
    }
`;

const FormFields = styled.div`
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    div {
        display: flex;
        flex-direction: column;
    }

    label {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 0.4rem;
    }

    input {
        font-size: 1.8rem;
        padding: 0.3rem;
    }
`;



const PanelKlienta = () => {
    return (
        <>
        <PageSEO title={panelKlientaSeo.title} description={panelKlientaSeo.description}/>
        <PanelKlientaWrapper>
            <PanelKlientaForm method="post" action="https://panel-tip.sekocin.pl/"> 
                <h1>Panel Klienta</h1>
                <p>Numer ID i PIN jest nadawany podczas instalacji oraz widnieje na każdej fakturze.</p>           
                <FormFields>
                    <div>
                        <label for="id">Numer ID</label>
                        <input name="loginform[login]" type="text" id="id"/>
                    </div>
                    <div>
                        <label for="pin">Numer PIN</label>
                        <input type="password" id="pin" name="loginform[pwd]"/>
                    </div>
                </FormFields>    
                <Button text="zaloguj" type="submit" name="loginform[submit]"/>
            </PanelKlientaForm>
        </PanelKlientaWrapper>
        </>
    )
};

export default PanelKlienta