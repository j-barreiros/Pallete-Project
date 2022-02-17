import React, { useState, useContext } from 'react';

//Components
import { PalleteContext } from '../../../pages/_app.js';
import SideBar from '../SideBar/SideBar.js';
import CollectionBar from '../CollectionBar/CollectionBar.js';
import PalleteCard from '../PalleteCard/PalleteCard.js';

function HomePage({ activePage }) {
    const { palleteList } = useContext(PalleteContext).pallete;
    const { palleteCollection } = useContext(PalleteContext).collection;
    const setPalleteList = useContext(PalleteContext).setPalleteList;

    function pageContentSetup() {
        if (activePage == 'Palletes') {
            return (
                palleteList.map((pallete) => {
                    return (
                        <PalleteCard
                            key={pallete.id}
                            pallete={pallete}
                        />
                    )
                }
                )
            )
        } else {
            return (
                palleteCollection.map((pallete) => {
                    return (
                        <PalleteCard
                            key={pallete.id}
                            pallete={pallete}
                        />
                    )
                }
                )
            )
        }
    }

    return (
        <main>

            <SideBar activeMenuItem={activePage} />

            <section className='palleteDisplay'>
                {pageContentSetup()}
            </section>

            {activePage != 'Collection' ? <CollectionBar /> : ''}

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
                    margin-right: ${activePage == 'Collection' ? '0' : '250'}px;
                    margin-bottom: 200px;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-row-gap: 20px;
                }

                @media screen and (max-width: 1430px) {
                    .palleteDisplay {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media screen and (max-width: 1300px) {
                    .palleteDisplay {
                        margin-right: 0px;
                    }

                    main :global(.collectionBar) {
                        display: none;
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