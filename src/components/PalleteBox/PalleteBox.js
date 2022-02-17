import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';

//Context
import { PalleteContext } from '../../../pages/_app';

//Components
import PalleteStripe from '../PalleteStripe/PalleteStripe.js'

export default function PalleteBox({ id, colors, size }) {

    //const [width, setWidth] = useState(230);
    //const [height, setHeight] = useState(200);
    const [showRemoveButton, setShowRemoveButton] = useState(false);
    const router = useRouter();
    const removeFromCollection = useContext(PalleteContext).collection.removeFromCollection;

    const [ width, height] = defineDimension(size);

    function defineDimension(boxSize) {
        switch (boxSize) {
            case 'small':
                return [47, 47];
            case 'medium':
                return [230, 200];
            default: //big
                return [390, 350];      
        }
    }

    function handleClick() {
        if (size == 'big') return;
        router.push(`/${id}`);
    }

    return (
        <section
            onMouseEnter={() => setShowRemoveButton(true)}
            onMouseLeave={() => setShowRemoveButton(false)}
        >
            <a
                className={`removeButton ${size != 'small' ? 'removeButtonDisabled' : ''}`}
                onClick={() => removeFromCollection(id)}
            >
                x
            </a>
            {colors.map((color, index) => {
                return <PalleteStripe
                    className="stripe"
                    key={index}
                    color={color}
                    size={size}
                    handleClick={handleClick}
                />
            })}


            <style jsx>{`
                section {
                    position: relative;
                    width: ${width}px;
                    height: ${height}px;
                    overflow: hidden;
                    border-radius: 7px;
                    margin-bottom: 5px;
                }

                .removeButton {
                    position: absolute;
                    top: 2px;
                    right: 3px;
                    padding: 1px 6.3px;
                    border-radius: 50%;
                    opacity: ${showRemoveButton ? '0.6' : '0'};
                    transition: 0.3s;
                    color: #fff;
                    font-size:  14px;
                    background: black;
                    cursor: pointer;
                    -webkit-user-select: none;  
                    -moz-user-select: none;    
                    -ms-user-select: none;      
                    user-select: none;
                }

                .removeButton:hover {     
                    opacity: 1;
                }

                .removeButtonDisabled {
                    display: none;
                }
            `}</style>
        </section>
    );
}