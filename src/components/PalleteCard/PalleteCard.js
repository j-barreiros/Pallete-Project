import React, { useState, useContext } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { PalleteContext } from '../../../pages/_app.js';

//Components
import PalleteBox from '../PalleteBox/PalleteBox.js';
import LikeButton from '../LikeButton/LikeButton.js';


export default function PalleteCard(props) {
    const { id, colors} = props.pallete;
    const {palleteCollection, addToCollection, removeFromCollection, isInTheCollection} = useContext(PalleteContext).collection;

    function handleLike(palleteId) {
        if(isInTheCollection(palleteId)) {
            removeFromCollection(palleteId);
        } else {
            addToCollection(props.pallete);
        }
    }

    return (
        <article>

            <PalleteBox id={id} colors={colors} size='medium'/>
            <LikeButton pallete={props.pallete} />
            <li className="navItem">color</li>
            
            <style jsx>{`
                .likeButton {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: transparent;
                    border: solid pink 2px;
                    border-radius: 5px;
                }
                
                .heartIcon {
                    font-size: 20px;
                    color: red;
                }
            `}</style>

        </article>
    )
}