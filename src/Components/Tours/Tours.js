import React, { Component } from 'react';
import './Tours.css';
import Card from '../Cards/Card'
import Tour from './Tour/Tour'

class Tours extends Component {

    render() {
        return (
            <div className='Tours'>
                <Tour />
                <Card />
            </div>
        );
    }
}

export default Tours;