import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

//Components 
import PalleteBox from '../src/components/PalleteBox/PalleteBox.js';
import ColorInfo from '../src/components/ColorInfo/ColorInfo'
import { PalleteContext } from "./_app.js";

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
                <h2>{myPallete.likes}</h2>
                {myPallete.colors.map((color, index) => <ColorInfo key={index} colorHex={color} />)}
            </>
        )
    }
}