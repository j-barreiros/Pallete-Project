import { useContext } from "react";

//Context
import { PalleteContext } from '../../../pages/_app';

//Components
import PalleteBox from "../PalleteBox/PalleteBox";

export default function CollectionBar() {

    const myCollection = useContext(PalleteContext).collection.palleteCollection;

    return (
        <section className='collectionBar'>
            <h2>Your Collection</h2>
            <ul>
            </ul>
            <div className='collectionDisplay'>
                    {myCollection.map((item, index) => <PalleteBox id={item.id} colors={item.colors} size='small'/>)}
            </div>
        </section>
    )
}