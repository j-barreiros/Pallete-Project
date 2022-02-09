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
            <p>Save</p>
            <style jsx>{`
                .likeButton {
                    width: 30%;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    font-size: 14px;
                    padding: 0px 10px;
                    background: ${isInTheCollection(pallete.id) ? '#F3F3F3' : 'transparent'};
                    border: solid #F3F3F3 1px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }

                .likeButton:hover {
                    background: ${isInTheCollection(pallete.id) ? '#F3F3F3' : 'transparent'};;
                }

                .heartIcon {
                    margin-top: 5px;
                    font-size: 20px;
                    color: #444;
                    margin-right: 4px;
                }
            `}</style>
        </button>
    );
}