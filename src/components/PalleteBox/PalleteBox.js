import { useEffect, useState } from 'react';

//Components
import PalleteStripe from '../PalleteStripe/PalleteStripe.js'

export default function PalleteBox({colors, size}) {

    const [width, setWidth] = useState(150);
    const [height, setHeight] = useState(120);
    
    useEffect(() => {
        if(size == 'small'){
          setWidth(57);
          setHeight(60);
      }
    },[]);
    

    return (
        <section>
            {colors.map((color, index) => {
                return <PalleteStripe key={index} color={color}/>
            })}

            <style jsx>{`
                section {
                    width: ${width}px;
                    height: ${height}px;
                    background: red;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
}