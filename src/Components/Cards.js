import React from 'react'
import './cards.css'
// import naran from './images/naran.jpg'

export default function Cards (props) {
    console.log (props)
    return (
        <>
        <div className='main--body'> 
             <div className='leftside--pic'>
                <img src={props.img} alt='Pic_of_place' className='pic'/>
             </div>
             <div className='right--side'>
                    <div className='top--line'>    
                        <p className='location'>
                            <div className='location--icon'>
                                <i class="fa-solid fa-location-dot"></i>
                                </div>
                                {props.countryName}
                                </p>
                        <a href={props.googleMap} className='google--map' target="_blank">View On Google Maps</a>
                    </div>
                        <div className='rest--text'>
                            <h1 className='heading'>{props.placeName}</h1>
                            <h4 className='dates'> {props.dates}</h4>
                            <p className='bottom--description'>{props.description}</p>
                        </div>
             </div>
        </div>

        </>
    )
}