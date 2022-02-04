import React, {useState} from "react"

export const PalleteContext = React.createContext();

export default function App({Component, pageProps}) {
    const [palleteList, setPalleteList] = useState([
        {
            id: '001',
            colors: ['#222831', '#393E46', '#00ADB5', '#EEEECC'],
            likes: '302'
        },
        {
            id: '002',
            colors: ['#F9ED69', '#F08A5D', '#B83B5E', '#6A2C70'],
            likes: '55'
        },
        {
            id: '003',
            colors: ['#F38181', '#FCE38A', '#EAFFD0', '#95E1D3'],
            likes: '20'
        },
        {
            id: '004',
            colors: ['#08D9D6', '#252A34', '#FF2E63', '#EAEAEA'],
            likes: '12'
        },
    ])

    return (
        <PalleteContext.Provider value={{
            palleteList: palleteList,
            setPalleteList: setPalleteList
        }}>
            <Component {...pageProps} />
        </PalleteContext.Provider>
    )
}