import React, { useState } from 'react';
import PalleteCard from '../src/components/PalleteCard/PalleteCard.js'


function HomePage() {
    const [palleteList, setPalleteList] = useState([
        {
            id: '001',
            colors: ['#222831', '#393E46', '#00ADB5', '#EEEEEE'],
            likes: '0'
        },
        {
            id: '002',
            colors: ['#F9ED69', '#F08A5D', '#B83B5E', '#6A2C70'],
            likes: '0'
        },
        {
            id: '003',
            colors: ['#F38181', '#FCE38A', '#EAFFD0', '#95E1D3'],
            likes: '0'
        },
        {
            id: '004',
            colors: ['#08D9D6', '#252A34', '#FF2E63', '#EAEAEA'],
            likes: '0'
        },
    ]);

    function findPalleteById(id) {
        return palleteList.find((pallete) => pallete.id == id);
    }

    function addLike(palleteIdToUpdate) {
        const editedPalleteList = palleteList.map((pallete) => {
            if (pallete.id == palleteIdToUpdate) {
                pallete.likes++
            }
            return pallete
        })
        console.log(editedPalleteList)
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