import { copyToClipboard } from "../../lib/copyToClipboard";

function textToCopy(props) {
    return (
        <div>

        </div>
    )
}

export default function ColorInfo({colorHex}) {

    function hexToRgb(hexColor) {
        hexColor = hexColor.slice(1);
        let convertedColor = [
            parseInt(hexColor.substring(0,2), 16), 
            parseInt(hexColor.substring(2,4), 16), 
            parseInt(hexColor.substring(4,6), 16)
        ]
        return `rgb(${convertedColor[0]}, ${convertedColor[1    ]}, ${convertedColor[2]})`;
    }

    return (
        <article>
            {/* Circle with the color */}
            <div className='colorDisplay'></div>
            {/* Color hexcode */}
            <p>{colorHex}</p>
            {/* Color rgb */}
            <p>{`${hexToRgb(colorHex)}`}</p>
            <style jsx>{`
                article {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .colorDisplay {
                    width: 50px;
                    height: 50px;
                    border-radius: 50px;
                    background-color: ${colorHex};
                    margin: 10px;
                }

                p {
                    margin: 10px 0px;
                }
            `}</style>
        </article>
    );
}