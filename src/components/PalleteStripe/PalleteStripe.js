import React, { useState } from 'react';

export default function PalleteStripe({ color }) {
    const [showCode, setShowColor] = useState(false);

    return (
        <>
            <article onMouseEnter={() => setShowColor(true)} onMouseLeave={() => setShowColor(false)}>
                <div onClick={() => console.log('hello')}>{color}</div>
                
                <style jsx>{`
                    article {
                        width: 100%;
                        height: 25%;
                        display: flex;
                        align-items: flex-end;
                        background-color: ${color};
                        cursor: pointer;
                    }

                    div {
                        cursor: pointer;
                        opacity: ${showCode ? '1' : '0'};
                        background: rgba(3,3,3, 0.3);
                        transition: all 0.2s;
                        color: white;
                        padding: 3px 4px;
                        border-top-right-radius: 3px;
                        z-index: 2;
                    }

                    div:hover {
                        background: rgba(3,3,3, 0.5);
                    }
                `}</style>
            </article>
        </>
    )
}