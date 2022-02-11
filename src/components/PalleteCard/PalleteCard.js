import React, { useState, useContext } from 'react';
import { PalleteContext } from '../../../pages/_app.js';

//Components
import PalleteBox from '../PalleteBox/PalleteBox.js';
import LikeButton from '../LikeButton/LikeButton.js';


export default function PalleteCard(props) {
    const { id, colors } = props.pallete;
    const { palleteCollection, addToCollection, removeFromCollection, isInTheCollection } = useContext(PalleteContext).collection;

    function handleLike(palleteId) {
        if (isInTheCollection(palleteId)) {
            removeFromCollection(palleteId);
        } else {
            addToCollection(props.pallete);
        }
    }

    return (
        <article className='palleteCard'>

            <PalleteBox id={id} colors={colors} size='medium' />
            <div className='palleteInfo'>
                <LikeButton pallete={props.pallete} />
                <p>5 days</p>
            </div>

            <style jsx>{`
                .palleteCard {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;    
                }
                
                .palleteInfo {
                    width: 90%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .palleteInfo p {
                    display: inline;
                }
            `}</style>

        </article>
    )
}