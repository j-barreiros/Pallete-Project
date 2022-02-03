import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

//Components
import PalleteBox from '../PalleteBox/PalleteBox.js';


export default function PalleteCard(props) {
    const { addLike, removeLike} = props;
    const { id, colors, likes } = props.pallete;

    const [gaveLike, setGaveLike] = useState(false);

    function handleLike() {
        if (gaveLike) {
            removeLike(id);
        } else {
            addLike(id)
        }
        setGaveLike(!gaveLike);
    }

    return (
        <article>

            <PalleteBox colors={colors} size='big'/>



            <button onClick={handleLike} className='likeButton'>
                <i className='heartIcon'>
                    {gaveLike ? <AiFillHeart/> : <AiOutlineHeart/>}
                </i>
                <p>{likes}</p>
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