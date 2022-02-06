import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

//Components
import PalleteStripe from '../PalleteStripe/PalleteStripe.js'

export default function PalleteBox({ id, colors, size }) {

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const router = useRouter();

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

    function handleClick() {
        console.log('batata')
        if(size != 'big') return;

        router.push(`/${id}`);
    }

    return (
        <section>
            {colors.map((color, index) => {
                return <PalleteStripe key={index} color={color} handleClick={handleClick}/>
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