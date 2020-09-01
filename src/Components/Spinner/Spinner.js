import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerScreen = styled.div`
    background-color:gray;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;


const rotateAnimation = keyframes`
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(360deg);
    }
`;


const Loading = styled.div`
    height:6rem;
    width:6rem;
    border-radius:50%;
    border:solid;
    border-width: .5rem;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, #00C853, #B2FF59);
    background-color:transparent;
    animation-name: ${rotateAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    margin-bottom:2rem;
`;
const LoadingText = styled.h3`
    color:white;
    font-weight:200;
`;

const Spinner = () => (

    <SpinnerScreen>
        <Loading />
        <LoadingText>Please wait!</LoadingText>
    </SpinnerScreen>
)

export default Spinner;