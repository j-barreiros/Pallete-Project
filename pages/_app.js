import React, {useState} from "react"

export const PalleteContext = React.createContext();

export default function App({Component, pageProps}) {
    const [palleteList, setPalleteList] = useState([
        {
            id: '0',
            colors: ['#222831', '#393E46', '#00ADB5', '#EEEECC'],
            likes: '302'
        },
        {
            id: '1',
            colors: ['#F9ED69', '#F08A5D', '#B83B5E', '#6A2C70'],
            likes: '55'
        },
        {
            id: '2',
            colors: ['#F38181', '#FCE38A', '#EAFFD0', '#95E1D3'],
            likes: '20'
        },
        {
            id: '3',
            colors: ['#08D9D6', '#252A34', '#FF2E63', '#EAEAEA'],
            likes: '12'
        },
    ])

    const [palleteCollection, setPalleteCollection] = useState([]);

    function addToCollection(pallete) {
        setPalleteCollection([...palleteCollection, pallete]);
    }

    function removeFromCollection(palleteId) {
        setPalleteCollection(palleteCollection.filter((pallete) => pallete.id != palleteId))
    }

    function isInTheCollection(palleteId) {
        return palleteCollection.find(pallete => pallete.id == palleteId);
    }

    return (
        <PalleteContext.Provider value={{
            pallete: {
                palleteList: palleteList,
                setPalleteList: setPalleteList,
            },
            collection: {
                palleteCollection: palleteCollection,
                addToCollection: addToCollection,
                removeFromCollection: removeFromCollection,
                isInTheCollection: isInTheCollection
            },
        }}>
            <Component {...pageProps} />
        </PalleteContext.Provider>
    )
}