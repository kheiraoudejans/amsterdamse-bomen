import React, { FC } from 'react';
import styled from 'styled-components/macro';
import Helmet from 'react-helmet';

const Title = styled.div`
    background: black;
    padding: 4rem 1rem;
    text-align: center;
    color: white;
    font-size: large;
`;

const NotFound: FC = () => {
    return (
        <>
            <Helmet>
                <title>Page not found</title>
                <meta name="description" content="This page could not be found." />
            </Helmet>
            <Title>Page not found!</Title>
        </>
    );
};

export default NotFound;
