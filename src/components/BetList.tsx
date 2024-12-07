import React from 'react'
import { useBets } from '../contexts/Bet'

function BetList() {
    const { betsData, setBetAmount } = useBets()


    const onChange = (betId: string, e: any) => {
        let value = +e.target.value;
        setBetAmount(betId, value)
    }

    if (betsData.length === 0) return null;
    // https://www.tailwindtap.com/components/table/interactive-table-with-sorting

    return (
        <div className="flex justify-center">
            <div className='flex flex-col w-2/3 '>
                <p className='p-2 text-2xl bg-green-950'>Bet list</p>
                <ul className='text-xl'>
                    {/* {grouped.} */}
                    {(betsData).sort((a, b) => a[0].length - b[0].length).map(([betId, { amount }]) => {
                        return (
                            <li className={`grid justify-between grid-cols-[2fr_1fr] mx-4 border-b mt-${betId.split('-').length - 1}`}>
                                <span>{betId.replace(/_/g, ' ')}</span>
                                <span className='flex flex-row items-start justify-end flex-1'>
                                    <span>$</span>
                                    <input className='w-3/4 bg-green-900' value={amount} onChange={(e) => onChange(betId, e)} />
                                </span>
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default BetList