import React, { Component } from 'react';
import './Tours.css';

class ToursTab extends Component {

    countries =['Nepal','Pakistan','China','Afganistan','Maldives','SriLanka','Columbia','Indonesia','France','Germany','America','Brazil','NewZealand','Greenland','Australia','Russia','Spain','Greece','Portugal'];
    state={
        activeClass:'Nepal'
    }
    TabClickedHandler=(country)=>{
        this.setState({activeClass:country})
    }

    render() {
        return (
            <div className='tabbarsWrapper'>
            <div className='tabbars'>
                {this.countries.map(country=>{
                    return <h3 className={country===this.state.activeClass?'active':null} onClick={()=>this.TabClickedHandler(country)} key={this.countries.indexOf(country)}>{country}</h3>
                })}
            </div>
        </div>
        );
    }
}

export default ToursTab;