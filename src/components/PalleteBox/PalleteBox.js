import { useEffect, useState } from 'react';

//Components
import PalleteStripe from '../PalleteStripe/PalleteStripe.js'

export default function PalleteBox({ colors, size }) {

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        switch(size) {
            case 'small':
                setWidth(57);
                setHeight(60);
                break;
            case 'medium':
                setWidth(150);
                setHeight(120);
                break;
            case 'big':
                setWidth(300);
                setHeight(240);
                break;
            default:
                break;
        }
    }, []);


    return (
        <section>
            {colors.map((color, index) => {
                return <PalleteStripe key={index} color={color} />
            })}

            <style jsx>{`
                section {
                    width: ${width}px;
                    height: ${height}px;
                    background: red;
                    overflow: hidden;
                    border-radius: 7px;
                }
            `}</style>
        </section>
    );
}