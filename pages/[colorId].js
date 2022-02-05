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
            <>
                <PalleteBox colors={myPallete.colors} size='big' />
                {myPallete.colors.map((color, index) => <ColorInfo key={index} colorHex={color} />)}
                <LikeButton pallete={myPallete}></LikeButton>
            </>
        )
    }
}