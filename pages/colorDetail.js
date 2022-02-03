import ColorInfo from '../src/components/ColorInfo/ColorInfo.js';

export default function colorDetail(){
    const colors = ['#FF2211', '#22FF11', '#661144', '#AAAAAA'];
    return(
        <>
            {colors.map((color) => <ColorInfo colorHex={color}/>)}
        </>
    )
}