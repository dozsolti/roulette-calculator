import React from 'react'
import { useBets } from '../contexts/Bet'

function NumberList() {
    const { numberList, total } = useBets()


    const renderList = () => {
        return numberList.map(({ name, profit }) => {
            return (<li style={{ "color": profit === 0 ? 'gray' : profit < 0 ? "red" : 'white' }}>
                {name} - profit: {profit}
            </li>)
        })
    }
    const renderListSortByProfit = () => {
        return [...numberList].sort((a, b) => b.profit - a.profit).map(({ name, profit }) => {
            return (<li style={{ "color": profit === 0 ? 'gray' : profit < 0 ? "red" : 'white' }}>
                {name} - profit: {profit}
            </li>)
        })
    }
    return (
        <div className='flex flex-col flex-1 text-center'>
            <h1>Number list</h1>
            <div style={{ display: "flex", flexDirection: 'row' }}>
                <ul style={{ listStyle: 'none', flex: 1 }}>
                    {renderList()}
                </ul>
                {/* <ul style={{ listStyle: 'none', flex: 1 }}>
                    {renderListSortByProfit()}
                </ul> */}
            </div>
        </div>
    )
}

export default NumberList