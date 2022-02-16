import React, { useState, useContext } from 'react';
import PalleteCard from '../src/components/PalleteCard/PalleteCard.js'

//Components
import { PalleteContext } from './_app.js';
import SideBar from '../src/components/SideBar/SideBar.js';
import CollectionBar from '../src/components/CollectionBar/CollectionBar.js';

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

            <CollectionBar />

            <style jsx>{`
                main {
                    height: 100vh;
                    position: relative;
                    display: flex;
                }
                
                .palleteDisplay {
                    width: 100%;
                    margin-top: 20px;
                    margin-left: 193px;
                    margin-right: 250px;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-row-gap: 20px;
                }

                @media screen and (max-width: 1430px) {
                    .palleteDisplay {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media screen and (max-width: 940px) {
                    .palleteDisplay {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media screen and (max-width: 700px) {
                    .palleteDisplay {
                        grid-template-columns: 1fr;
                    }
                }
                `}</style>
        </main>
    )
}

export default HomePage;