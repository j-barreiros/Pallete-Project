import React, { useState, useContext } from 'react';
import PalleteCard from '../src/components/PalleteCard/PalleteCard.js'

//Components
import { PalleteContext } from './_app.js';
import SideBar from '../src/components/SideBar/SideBar.js';

function HomePage() {
    const { palleteList } = useContext(PalleteContext).pallete;
    const setPalleteList = useContext(PalleteContext).setPalleteList;

    return (
        <main>

            <SideBar />

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
            </section>

            <SideBar />

            <style jsx>{`
                main {
                    background: #ccc;
                    height: 100vh;
                    display: grid;
                    grid-template-columns: 1fr 2.5fr 1fr;
                }
                
                .palleteDisplay {
                    display: flex;
                    justify-content: space-evenly;
                }
            `}</style>
        </main>
    )
}

export default HomePage;