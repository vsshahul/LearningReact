import React from 'react';

const Button = (props) => {
return (
   <div className='btn'> 
       <button className='primary-btn'>{props.name}{props.children}</button>
    </div>
    );
};

export default Button;