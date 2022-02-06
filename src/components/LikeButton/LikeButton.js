import { useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { PalleteContext } from '../../../pages/_app.js';

export default function LikeButton({ pallete }) {

    const { palleteCollection, addToCollection, removeFromCollection, isInTheCollection } = useContext(PalleteContext).collection;

    function handleLike(palleteId) {
        if (isInTheCollection(palleteId)) {
            removeFromCollection(palleteId);
        } else {
            addToCollection(pallete);
        }
        console.log(palleteCollection)
    }

    return (
        <button
            className='likeButton'
            onClick={() => handleLike(pallete.id)}
        >
            <i className='heartIcon'>
                {isInTheCollection(pallete.id) ? <AiFillHeart /> : <AiOutlineHeart />}
            </i>
            Save
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
        </button>
    );
}