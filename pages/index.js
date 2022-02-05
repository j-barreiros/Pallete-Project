import React, { useState, useContext } from 'react';
import PalleteCard from '../src/components/PalleteCard/PalleteCard.js'
import { PalleteContext } from './_app.js';


function HomePage() {
    const {palleteList} = useContext(PalleteContext).pallete;
    const setPalleteList = useContext(PalleteContext).setPalleteList;

    function addLike(palleteIdToUpdate) {
        const editedPalleteList = palleteList.map((pallete) => {
            if (pallete.id == palleteIdToUpdate) {
                pallete.likes++
            }
            return pallete
        })
        setPalleteList(editedPalleteList);
    }

    function removeLike(palleteIdToUpdate) {
        const editedPalleteList = palleteList.map((pallete) => {
            if (pallete.id == palleteIdToUpdate) {
                pallete.likes--
            }
            return pallete
        })
        console.log(editedPalleteList)
        setPalleteList(editedPalleteList);
    }

    return (
        <>
            {palleteList.map((pallete) => {
                return (
                    <PalleteCard
                        key={pallete.id}
                        pallete={pallete}
                        addLike={addLike}
                        removeLike={removeLike}
                    />
                )
            }
            )}
        </>
    )
}

export default HomePage