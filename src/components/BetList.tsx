import React from 'react'
import { useBets } from '../contexts/Bet'

function BetList() {
    const { betsData } = useBets()

    const betsMap = (betsData).sort((a, b) => a[0].length - b[0].length).map(([betId, { amount }]) => {
        return (<li className='mx-4 mt-1 border-b'>{betId.replace(/_/g, ' ')} ${amount}</li>)
    })
    if (betsData.length === 0) return null;
    // https://www.tailwindtap.com/components/table/interactive-table-with-sorting
    return (
        <div className="flex justify-center">
            <div className='flex flex-col w-2/3 '>
                <p className='p-2 text-2xl bg-green-950'>Bet list</p>
                <ul className='text-xl'>
                    {betsMap}
                </ul>
            </div>
        </div>
    )
}

export default BetList