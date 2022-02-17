import { useContext } from "react";

//Context
import { PalleteContext } from '../../../pages/_app';

//Components
import PalleteBox from "../PalleteBox/PalleteBox";

//Icon
import { BsBookmarkHeartFill } from 'react-icons/bs';

export default function CollectionBar() {

    const myCollection = useContext(PalleteContext).collection.palleteCollection;

    return (
        <section className='collectionBar'>
            <h1>
                <BsBookmarkHeartFill/> Collection
            </h1>
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
                padding: 10px 10px 0px 10px;
                border-left: 1px solid rgba(0,0,0,0.1);
            }

            .collectionBar h1 {
                margin: 10px 0px 15px 0px;
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