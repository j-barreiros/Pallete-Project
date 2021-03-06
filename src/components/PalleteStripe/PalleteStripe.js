import React, { useState, useRef } from 'react';

import { copyToClipboard } from '../../lib/copyToClipboard';

export default function PalleteStripe({ color, size, handleClick }) {
    const [showCode, setShowColor] = useState(false);
    const [isCopiedAlertActive, setIsCopiedAlertActive] = useState(false)

    function handleColorCopy() {
        setIsCopiedAlertActive(true);
        copyToClipboard(color);
        setTimeout(() => setIsCopiedAlertActive(false), 1000)
    }

    return (
        <article
            className='teste'
            onMouseEnter={() => setShowColor(true)}
            onMouseLeave={() => setShowColor(false)}
        >
            <div
                className='clickLayer'
                onClick={() => handleClick()}
            ></div>

            <div
                className={`colorCode ${size == 'small' ? 'colorCodeDisabled' : ''}`}
                onClick={() => handleColorCopy()}
            >
                {isCopiedAlertActive ? 'Copied' : color }
            </div>

            <style jsx>{`
                    article {
                        width: 100%;
                        height: 25%;
                        display: flex;
                        align-items: flex-end;
                        background-color: ${color};
                    }
                    
                    .clickLayer {
                        align-self: flex-start;
                        width: 100%;
                        height: 100%;
                        cursor: ${size != 'big' ? 'pointer' : 'default'};
                    }

                    .colorCode {
                        position: absolute;
                        cursor: pointer;
                        opacity: ${showCode ? '1' : '0'};
                        background: rgba(3,3,3, ${isCopiedAlertActive ? '0.7' : '0.3'});
                        transition: all 0.2s;
                        color: white;
                        padding: 3px 7px;
                        border-top-right-radius: 3px;
                    }
                    
                    .colorCode:hover {
                        background: rgba(3,3,3, ${isCopiedAlertActive ? '0.7' : '0.5'});
                    }
                    .colorCodeDisabled {
                        display: none;
                    }


                    .copyInput {
                        width: 1px;
                        opacity: 0;
                    }
                `}</style>
        </article>
    )
}