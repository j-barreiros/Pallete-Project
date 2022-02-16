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
            <div className='collectionDisplay'>
                    {myCollection.map((item, index) => <PalleteBox id={item.id} key={index} colors={item.colors} size='small'/>)}
            </div>
        <style jsx>{`
            .collectionBar {
                width: 250px;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: fixed;
                right: 0px;
                border-left: 1px solid rgba(0,0,0,0.1);
            }

            .collectionDisplay {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-column-gap: 7px;
            }
        `}</style>
        </section>
    )
}