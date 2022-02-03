import React, { useState } from 'react';

export default function PalleteStripe({ color }) {
    return (
        <>
            <article>
                <div>{color}</div>
                
                <style jsx>{`
                    article {
                        width: 150px;
                        height: 30px;
                        background-color: ${color};
                    }

                    div {
                        cursor: pointer;
                        opacity: 0;
                        background: #444;
                        transition: opacity 0.2s;
                    }

                    div:hover {
                        opacity: 1;
                    }
                `}</style>
            </article>
        </>
    )
}