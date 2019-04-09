import React from 'react';

const Searchbox = ({searchfeild, searchChange}) => {
    return (
        <div className='pd2'>
        <input className='pa3 ba b- -green bg-light-blue' type='search' placeholder='search robots' 
        onChange={searchChange}
        />
        </div>
    );
}

export default Searchbox;