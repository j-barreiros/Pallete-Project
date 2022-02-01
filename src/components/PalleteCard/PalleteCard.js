import React, { useState } from 'react';
import PalleteStripe from '../PalleteStripe/PalleteStripe.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faRegHeart} from "@fortawesome/free-regular-svg-icons"

export default function PalleteCard(props) {
    const { id, colors, likes} = props.pallete;
    const {addLike, removeLike} = props;

    const [gaveLike, setGaveLike] = useState(false);

    const darkHeart = {color: 'red'}
    const lightHeart = {color: 'blue'}

    function handleLikeButton() {
        if(gaveLike) {
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
            <p>
                <FontAwesomeIcon style={gaveLike ? darkHeart : lightHeart} icon={faHeart}/>
                {likes}
            </p>
            <button onClick={handleLikeButton}>Add Like</button>
            <style jsx>{`
                .fullHeart {
                    opacity: 1;
                    color: 'red';
                }

                .emptyHeart {
                    opacity: 0.5;
                    color: blue;
                }
            `}</style>
        </article>
    )
}