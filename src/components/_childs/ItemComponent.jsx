import React from 'react';
import PropTypes from 'prop-types';

const ItemComponent = ({item}) => {

    const style = item.qt === 0 ? {background: 'red'} : null

    return (
        <div className='item-component' style={style} >
            <img src={`/images/${item.img}`} alt="" />
            <span>
                {item.title}
            </span>
            <span className='price'>{item.price}$</span>
        </div>
    );
};


export default ItemComponent;