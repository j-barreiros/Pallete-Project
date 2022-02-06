import React, { useState, useRef } from 'react';

import { copyToClipboard } from '../../lib/copyToClipboard';

export default function PalleteStripe({ color, handleClick }) {
    const [showCode, setShowColor] = useState(false);
    const [isCopiedAlertActive, setIsCopiedAlertActive] = useState(false)
    const inputRef = useRef();

    function handleColorCopy() {
        setIsCopiedAlertActive(true);
        copyToClipboard(color);
        setTimeout(() => setIsCopiedAlertActive(false), 1000)
    }

    return (
        <>
            <article
                onMouseEnter={() => setShowColor(true)}
                onMouseLeave={() => setShowColor(false)}
            >
                <input
                    ref={inputRef}
                    value={color}
                    className='copyInput'
                    readOnly
                ></input>

                <div
                    className='clickLayer'
                    onClick={() => handleClick()}
                ></div>

                <div
                    className='colorCode'
                    onClick={() => handleColorCopy()}
                >
                    {isCopiedAlertActive ? 'Copied' : color}
                </div>

                <style jsx>{`
                    article {
                        width: 100%;
                        height: 25%;
                        display: flex;
                        align-items: flex-end;
                        background-color: ${color};
                        cursor: pointer;
                    }

                    .clickLayer {
                        align-self: flex-start;
                        width: 100%;
                        height: 100%;
                    }

                    .colorCode {
                        position: absolute;
                        cursor: pointer;
                        opacity: ${showCode ? '1' : '0'};
                        background: rgba(3,3,3, 0.3);
                        transition: all 0.2s;
                        color: white;
                        padding: 3px 4px;
                        border-top-right-radius: 3px;
                    }

                    .colorCode:hover {
                        background: rgba(3,3,3, 0.5);
                    }

                    .copyInput {
                        width: 1px;
                        opacity: 0;
                    }
                `}</style>
            </article>
        </>
    )
}