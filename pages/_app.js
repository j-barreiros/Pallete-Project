import React, { useState, useEffect } from "react"

export const PalleteContext = React.createContext();

function GlobalStyle() {
    return (
        <style jsx global>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        a {
            text-decoration: none;
        }

        body {
            font-family: Helvetica, Arial, sans-serif;
        }
    `}</style>
    )
}

export default function App({ Component, pageProps }) {
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
        {
            id: '4',
            colors: ['#E3FDFD','#CBF1F5','#A6E3E9','#71C9CE'],
            likes: '12'
        },
        {
            id: '5',
            colors: ['#FFC7C7','#FFE2E2','#F6F6F6','#8785A2'],
            likes: '12'
        },
        {
            id: '6',
            colors: ['#A8D8EA','#AA96DA','#FCBAD3','#FFFFD2'],
            likes: '12'
        },
        {
            id: '7',
            colors: ['#364F6B','#3FC1C9','#F5F5F5','#FC5185'],
            likes: '12'
        },
        {
            id: '8',
            colors: ['#F9F7F7','#DBE2EF','#3F72AF','#112D4E'],
            likes: '12'
        },
        {
            id: '9',
            colors: ['#FFB6B9','#FAE3D9','#BBDED6','#61C0BF'],
            likes: '12'
        },
        {
            id: '10',
            colors: ['#DEFCF9','#CADEFC','#C3BEF0','#CCA8E9'],
            likes: '12'
        },
        {
            id: '11',
            colors: ['#E4F9F5','#30E3CA','#11999E','#40514E'],
            likes: '12'
        },
        {
            id: '12',
            colors: ['#2B2E4A','#E84545','#903749','#53354A'],
            likes: '12'
        },
        {
            id: '13',
            colors: ['#F67280','#C06C84','#6C5B7B','#355C7D'],
            likes: '12'
        },
        {
            id: '14',
            colors: ['#F4EEFF','#DCD6F7','#A6B1E1','#424874'],
            likes: '12'
        },
        {
            id: '15',
            colors: ['#FFCFDF','#FEFDCA','#E0F9B5','#A5DEE5'],
            likes: '12'
        },
        {
            id: '16',
            colors: ['#E23E57','#88304E','#522546','#311D3F'],
            likes: '12'
        },
        {
            id: '17',
            colors: ['#1B262C','#0F4C75','#3282B8','#BBE1FA'],
            likes: '12'
        },
        {
            id: '18',
            colors: ['#212121','#323232','#0D7377','#14FFEC'],
            likes: '12'
        },
        {
            id: '19',
            colors: ['#FFC8C8','#FF9999','#444F5A','#3E4149'],
            likes: '12'
        },
        {
            id: '20',
            colors: ['#48466D','#3D84A8','#46CDCF','#ABEDD8'],
            likes: '12'
        },
        {
            id: '21',
            colors: ['#2D4059','#EA5455','#F07B3F','#FFD460'],
            likes: '12'
        },
        {
            id: '22',
            colors: ['#F0F5F9','#C9D6DF','#52616B','#1E2022'],
            likes: '12'
        },
        {
            id: '23',
            colors: ['#3EC1D3','#F6F7D7','#FF9A00','#FF165D'],
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

    function getCollectionFromLocalStorage() {
        let localStorageCollection = localStorage.getItem('collection');
        
        if(localStorageCollection){
            localStorageCollection = JSON.parse(localStorageCollection);
            setPalleteCollection(localStorageCollection);
        };
        
    }

    useEffect(() => {
        getCollectionFromLocalStorage();
    }, [])

    useEffect(() => {
        localStorage.setItem('collection', JSON.stringify(palleteCollection));
    }, [palleteCollection])
    

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
            <GlobalStyle />
        </PalleteContext.Provider>
    )
}