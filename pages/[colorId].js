import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { PalleteContext } from "./_app.js";

//Components 
import PalleteBox from '../src/components/PalleteBox/PalleteBox.js';
import ColorInfo from '../src/components/ColorInfo/ColorInfo.js'
import LikeButton from '../src/components/LikeButton/LikeButton.js'
import SideBar from "../src/components/SideBar/SideBar.js";
import CollectionBar from "../src/components/CollectionBar/CollectionBar.js";

export default function colorPage() {

    const router = useRouter();
    const { colorId } = router.query;
    const myPallete = useContext(PalleteContext).pallete.palleteList[colorId];

    if (!router.isReady) {
        return <h1>Loading</h1>
    } else {
        return (
            <main>
                <SideBar />

                <section className='colorSection'>
                    <section className="boxSection">
                        <PalleteBox colors={myPallete.colors} size='big' />
                        <div className='palleteFooter'>
                            <LikeButton pallete={myPallete}></LikeButton>
                            <p>{`#${colorId}`}</p>
                        </div>
                    </section>
                    <section className="infoSection">
                        {myPallete.colors.map((color, index) => <ColorInfo key={index} colorHex={color} />)}
                    </section>
                </section>

                <CollectionBar />

                <style jsx>{`
                    main {
                        display: flex;
                    }

                    .colorSection {
                        padding-top: 30px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-left: 193px;
                        margin-right: 250px;
                    }

                    .boxSection {
                        display: flex;
                        flex-direction: column;
                    }

                    .palleteFooter {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .infoSection {
                        width: 80%;
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        margin: 30px 160px;
                    }

                    @media screen and (max-width: 1200px) {
                        .infoSection {
                            margin: 30px 20px;
                        }
                    }

                
                    @media screen and (max-width: 1100px) {
                        .colorSection {
                            margin-right: 0px;
                        }

                        main :global(.collectionBar) {
                            display: none;
                        }

                    }

                    @media screen and (max-width: 850px) {
                        .infoSection {
                            grid-template-columns: repeat(2, 1fr);
                            margin: 30px 20px;
                        }
                    }

                    @media screen and (max-width: 700px) {
                        .infoSection {
                            grid-template-columns: 1fr;
                            margin: 30px 20px;
                        }
                    }
                `}</style>

                <style global jsx>{`
                    @media screen and (max-width: 900px) {
                        .collectionBar {
                            display: none;
                        }
                    }
                `}</style>
            </main>
        )
    }
}