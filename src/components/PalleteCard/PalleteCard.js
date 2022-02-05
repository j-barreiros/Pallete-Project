import React, { useState, useContext } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { PalleteContext } from '../../../pages/_app.js';

//Components
import PalleteBox from '../PalleteBox/PalleteBox.js';


export default function PalleteCard(props) {
    const { addLike, removeLike} = props;
    const { id, colors, likes } = props.pallete;
    const {palleteCollection, addToCollection, removeFromCollection, isInTheCollection} = useContext(PalleteContext).collection;

    function handleLike(palleteId) {
        if(isInTheCollection(palleteId)) {
            removeFromCollection(palleteId);
        } else {
            addToCollection(props.pallete);
        }
        console.log(palleteCollection)
    }

    return (
        <article>

            <PalleteBox id={id} colors={colors} size='big'/>

            <button onClick={() => handleLike(id)} className='likeButton'>
                <i className='heartIcon'>
                    {isInTheCollection(id) ? <AiFillHeart/> : <AiOutlineHeart/>}
                </i>
                Save
            </button>
            
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