import React from 'react';

const Card = (props) => {
    return(<div>
        <div className='primary-card'>
           <div className='primary-card-title'> {props.cardTitle}</div>
           <div className='primary-card-desc'> {props.cardDesc}</div>
        </div>
    </div>);
};
export default Card;