import React from 'react';
import './city.css';
import Card from '../Cards/Card'
import pokhara from '../../images/nep1.jpg'
import namobuddha from '../../images/nep2.jpg'
import panauti from '../../images/nep3.jpg'

import lahore from '../../images/pak1.jpg'
import karachi from '../../images/pak2.jpg'
import islamabad from '../../images/pak3.jpg'


const City = (props) => {
    return (
        props.title==='Nepal'?<div className='flex'>
        <Card imageName={pokhara}
        title='Pokhara'
        description='Pokhara is heart of beauty. It is located at center of Nepal. It attracts most tourists.'
        />
        <Card imageName={namobuddha}
        title='Namobuddha'
        description='Namobuddha is very famous Stupa. It is located at Dhulikhel. It attracts most tourists.'
        />
        <Card imageName={panauti}
        title='Panauti'
        description='Panauti is very beautiful. It is located at Kavrepalanchok. It attracts most tourists.'
        />
        </div>:props.title==='Pakistan'?<div className='flex'>
        <Card imageName={lahore}
        title='Lahore'
        description='Lahore is heart of beauty. It is located at Pakistan. It attracts most tourists.'
        />
        <Card imageName={karachi}
        title='Karachi'
        description='Karachi is very famous Stupa. It is located at pakistan. Its been my dream to visit once in a lifetime.'
        />
        <Card imageName={islamabad}
        title='Islamabad'
        description='Islamabad is very beautiful capital city. It is located at Pakistan. It attracts most tourists.'
        />
        </div>:null
    );
}

export default City;