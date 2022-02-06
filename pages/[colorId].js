import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { PalleteContext } from "./_app.js";

//Components 
import PalleteBox from '../src/components/PalleteBox/PalleteBox.js';
import ColorInfo from '../src/components/ColorInfo/ColorInfo'
import LikeButton from '../src/components/LikeButton/LikeButton'

export default function colorPage() {

    const router = useRouter();
    const { colorId } = router.query;
    const myPallete = useContext(PalleteContext).pallete.palleteList[colorId];

    if (!router.isReady) {
        return <h1>Loading</h1>
    } else {
        return (
            <main>
                <section className="boxSection">
                    <PalleteBox colors={myPallete.colors} size='big' />
                    <LikeButton pallete={myPallete}></LikeButton>
                </section>
                <section className="infoSection">
                    {myPallete.colors.map((color, index) => <ColorInfo key={index} colorHex={color} />)}
                </section>

                <style jsx>{`
                    .boxSection {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .infoSection {
                        display: flex;
                        justify-content: space-evenly;
                    }
                `}</style>
            </main>
        )
    }
}