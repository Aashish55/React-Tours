import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color:#27ae60;
    color:white;
    font-weight:500;
    font-size:1.8rem;
    padding:1.6rem 3rem;
    position:absolute;
    right:1.6rem;
    top:${props => props.top}px;
    z-index:999;
    transition: top 0.5s ease;
    border-radius:1rem;
`;


class Notification extends Component {
    

    render() {
        return (
            <Container top={this.props.topPosition} >{this.props.message}</Container>
        );
    }
}

export default Notification;