import React, { useState, useContext } from 'react';
import PalleteCard from '../src/components/PalleteCard/PalleteCard.js'
import { PalleteContext } from './_app.js';


function HomePage() {
    const allPaletes = useContext(PalleteContext).palleteList;

    const [palleteList, setPalleteList] = useState([
        {
            id: '001',
            colors: ['#222831', '#393E46', '#00ADB5', '#EEEEEE'],
            likes: '302'
        },
        {
            id: '002',
            colors: ['#F9ED69', '#F08A5D', '#B83B5E', '#6A2C70'],
            likes: '55'
        },
        {
            id: '003',
            colors: ['#F38181', '#FCE38A', '#EAFFD0', '#95E1D3'],
            likes: '20'
        },
        {
            id: '004',
            colors: ['#08D9D6', '#252A34', '#FF2E63', '#EAEAEA'],
            likes: '12'
        },
    ]);

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
            {allPaletes.map((pallete) => {
                return <PalleteCard
                    key={pallete.id}
                    pallete={pallete}
                    addLike={addLike}
                    removeLike={removeLike}
                />
            }
            )}
        </>
    )
}

export default HomePage