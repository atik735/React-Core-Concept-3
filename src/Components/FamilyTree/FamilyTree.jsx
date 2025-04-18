import React, { createContext } from 'react';
import './familytree.css'
import Grandpa from './Grandpa';
export const AssetContext = createContext('')

const asset ='diamond';

const FamilyTree = () => {
    return (
        
        <div className='family-tree'>
            <hr />
            <h3>Family Tree</h3>
            <AssetContext.Provider value={asset}><Grandpa></Grandpa></AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;