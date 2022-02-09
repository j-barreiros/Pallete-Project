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

            <style jsx>{`
                main {
                    height: 100vh;
                    position: relative;
                    display: flex;
                }
                
                .palleteDisplay {
                  width: 100%;
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  margin-left: 200px;
                }
                `}</style>
        </main>
    )
}

export default HomePage;