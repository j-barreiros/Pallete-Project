import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//Components
import PalleteStripe from '../PalleteStripe/PalleteStripe.js'

export default function PalleteBox({ id, colors, size }) {

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const router = useRouter();

    useEffect(() => {
        switch (size) {
            case 'small':
                setWidth(57);
                setHeight(60);
                break;
            case 'medium':
                setWidth(230);
                setHeight(200);
                break;
            case 'big':
                setWidth(390);
                setHeight(350);
            default:
                break;
        }
    }, []);

    function handleClick() {
        if (size != 'medium') return;
        router.push(`/${id}`);
    }

    return (
        <section>
            {colors.map((color, index) => {
                return <PalleteStripe className="stripe" key={index} color={color} handleClick={handleClick} />
            })}


            <style jsx>{`
                section {
                    width: ${width}px;
                    height: ${height}px;
                    background: red;
                    overflow: hidden;
                    border-radius: 7px;
                    margin-bottom: 5px;
                }
            `}</style>
        </section>
    );
}