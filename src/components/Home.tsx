import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import logo from '../logo.svg';
import Helmet from 'react-helmet';

const heartbeat = keyframes`
    0% { transform: scale(1); }
    80% { transform: scale(1); }
    85% { transform: scale(1.15); }
    90% { transform: scale(1.1); }
    95% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

const Logo = styled.img`
    animation: ${heartbeat} infinite 1s linear;
    height: 80px;
`;

const Header = styled.header`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
    font-size: 1.5em;
`;

const Intro = styled.p`
    font-size: large;
`;

const Home = () => (
    <>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="The homepage." />
        </Helmet>
        <Header>
            <Logo src={logo} alt="logo" />
            <Title>Welcome to React</Title>
        </Header>
        <Intro>
            To get started, edit <code>src/components/App.ts</code> and save to reload.
        </Intro>
    </>
);

export default Home;
