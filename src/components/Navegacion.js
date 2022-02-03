import React from 'react';
import styled from '@emotion/styled';
import logo from './UPC_logo.png';

const Container = styled.div`
    background-color: #f4f4f4;
`;

const NavContainer = styled.ul`
    width: 70%;
    max-width: 120rem;
    margin: 0 auto;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Titulo = styled.a`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
    a {
        text-transform: uppercase;
        margin-right: 1rem;
        &:last-of-type {
            margin-right: 0rem;
            color: white;
        }
    }
`;

const Boton = styled.a`
    background-color: #d31610;
    padding: 1rem 2.4rem;
    border: none;
    text-align: center;
    font-weight: bold;
`;

const Imagen = styled.img`
    max-width: 5rem;
`;

const DivLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Navegacion = () => {
    return (
        <Container>
            <NavContainer>
                <DivLogo>
                    <Titulo href='#'>Mi profe UPC</Titulo>
                    <a><Imagen src={logo}/></a>
                </DivLogo>
                <Nav>
                    <a href='#'>Mi perfil</a>
                    <a href='#'>Agendar reunion</a>
                    <a href='#'>Mi PTC</a>
                    <a href='#'>Preguntas frecuentes</a>
                    <Boton href='#'>Buscar</Boton>
                </Nav>
            </NavContainer>
        </Container>
    );
}
 
export default Navegacion;