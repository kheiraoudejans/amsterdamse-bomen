import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import Helmet from 'react-helmet';
import Tree from '../icons/Tree';
import { gsap } from 'gsap';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';

const Home = () => {
    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin);

        const trees = gsap.timeline();

        trees
            .fromTo('svg #tree', { drawSVG: '83% 85%' }, { drawSVG: '0% 85%', duration: 1 })
            .fromTo('svg #tree', { drawSVG: '85% 0%' }, { drawSVG: '0% 100%', duration: 0.5 })
            .fromTo('svg #tree', { fill: '#fff' }, { fill: '#4B1E16', duration: 0.5 })
            .from('.trees svg .leaves', { opacity: 0, stagger: 0.1, duration: 0.5, ease: 'power1.out' })
            .from('h1', { opacity: 0, stagger: 0.1, duration: 0.5 })
            .to('svg', { opacity: 0, duration: 1 });
    }, []);

    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="The homepage." />
            </Helmet>
            <Trees className="trees">
                <Title>De BoomApp</Title>
                <StyledTree />
            </Trees>
        </>
    );
};

export default Home;

const Trees = styled.div`
    display: flex;
    height: 100vh;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
    background-color: darkseagreen;
`;

const Title = styled.h1`
    width: 100vw;
    margin-top: 20vh;
    text-transform: uppercase;
`;

const StyledTree = styled(Tree)`
    width: 100vw;
    height: 100vh;

    .leaves:nth-of-type(odd) {
        fill: green;
    }

    .leaves:nth-of-type(even) {
        fill: darkgreen;
    }
`;
