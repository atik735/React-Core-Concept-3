import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name}) => {

    const asset = useContext(AssetContext)
    console.log("asset",asset);
    

    return (
        <div>
            <h3>Special:{name} {asset}</h3>
        </div>
    );
};

export default Special;