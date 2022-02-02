import React, { useState } from 'react';
import PalleteStripe from '../PalleteStripe/PalleteStripe.js';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


export default function PalleteCard(props) {
    const { id, colors, likes } = props.pallete;
    const { addLike, removeLike } = props;

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

            <div>
                {colors.map((color, index) =>
                    <PalleteStripe key={index} color={color} />
                )}
            </div>

            <button onClick={handleLike}>
                <i className='heartIcon'>
                    {gaveLike ? <AiFillHeart/> : <AiOutlineHeart/>}
                </i>
                {likes}
            </button>

            <style jsx>{`
                .heartIcon {
                    font-size: 20px;
                    color: red;
                    cursor: pointer
                }
            `}</style>

        </article>
    )
}