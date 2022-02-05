import React, { useState, useContext } from 'react';
import PalleteCard from '../src/components/PalleteCard/PalleteCard.js'
import { PalleteContext } from './_app.js';


function HomePage() {
    const {palleteList} = useContext(PalleteContext).pallete;
    const setPalleteList = useContext(PalleteContext).setPalleteList;

    return (
        <>
            {palleteList.map((pallete) => {
                return (
                    <PalleteCard
                        key={pallete.id}
                        pallete={pallete}
                    />
                )
            }
            )}
        </>
    )
}

export default HomePage