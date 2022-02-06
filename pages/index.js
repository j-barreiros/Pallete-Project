import React, { useState, useContext } from 'react';
import PalleteCard from '../src/components/PalleteCard/PalleteCard.js'
import { PalleteContext } from './_app.js';


function HomePage() {
    const {palleteList} = useContext(PalleteContext).pallete;
    const setPalleteList = useContext(PalleteContext).setPalleteList;

    return (
        <section className='palleteDisplay'>
            {palleteList.map((pallete) => {
                return (
                    <PalleteCard
                        key={pallete.id}
                        pallete={pallete}
                    />
                )
            }
            )}

            <style jsx>{`
                .palleteDisplay {
                    display: flex;
                }
            `}</style>

        </section>
    )
}

export default HomePage