export default function ColorInfo({colorHex}) {
    console.log(colorHex)
    return (
        <article>
            {/* Circle with the color */}
            <div className='colorDisplay'></div>
            {/* Color hexcode */}
            <p>{colorHex}</p>
            {/* Color rgb */}
            <p>Rgb</p>
            <style jsx>{`
                .colorDisplay {
                    width: 50px;
                    height: 50px;
                    border-radius: 50px;
                    background-color: ${colorHex};
                }
            `}</style>
        </article>
    );
}