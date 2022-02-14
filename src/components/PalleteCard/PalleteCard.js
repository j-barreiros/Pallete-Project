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
        <article className='gridItem'>

            <div className='palleteCard'>
                <PalleteBox id={id} colors={colors} size='medium' />
                <div className='palleteFooter'>
                    <LikeButton pallete={props.pallete} />
                    <p>5 days</p>
                </div>
            </div>

            <style jsx>{`
                .gridItem {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;    
                }
                
                .palleteCard {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .palleteFooter {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .palleteFooter p {
                    font-size: 13px;
                }
            `}</style>

        </article>
    )
}