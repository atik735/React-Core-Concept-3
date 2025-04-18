import React from 'react';
import Uncle from './Uncle';
import Dad from './Dad';
import Aunt from './Aunt';

const Grandpa = () => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;