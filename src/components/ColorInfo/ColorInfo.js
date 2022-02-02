export default function ColorInfo({colorHex}) {
    return (
        <article>
            {/* Circle with the color */}
            <div className='color-display'></div>
            {/* Color hexcode */}
            <p>{colorHex}</p>
            {/* Color rgb */}
            <p>Rgb</p>
            <style jsx>{`
                .color-display {
                    width: 50px;
                    height: 50px;
                    border-radius: 50px;
                    background: ${colorHex};
                }
            `}</style>
        </article>
    );
}