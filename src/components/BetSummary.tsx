import React from 'react'
import { useBets } from '../contexts/Bet'

function BetSummary() {
    const { total, betsData, numberList } = useBets()

    const getWinChance = () => {
        return +(numberList.filter(x => x.profit >= 0).length / numberList.length * 100).toFixed(2)
    };

    const getAvgWin = () => {
        if (betsData.length === 0) return 0;
        const v = numberList.filter(x => x.profit >= 0)
        if (v.length === 0) return 0;
        return (v.reduce((t, v) => t + v.profit, 0) / v.length).toFixed(2)
    }
    const getAvgProfit = () => {
        if (betsData.length === 0) return 0;
        const sum = numberList.reduce((t, v) => t + v.profit, 0)
        return (sum / numberList.length).toFixed(2)
    }

    return (
        <div className='text-center text-l'>
            <div className='flex flex-col justify-center gap-1 md:mt-0 md:gap-6 md:flex-row'>
                <span className='opacity-95'>Total bet: ${total}</span>
                <span className='text-xl' data-tooltip="No">Chance to win: {getWinChance()}%</span>
            </div >
            <div className='flex flex-col justify-center gap-1 md:mt-0 md:gap-6 md:flex-row'>
                <span className='text-xl'>Avg profit: ${getAvgProfit()}</span>
                <span className='opacity-95'>Avg when win: ${getAvgWin()}</span>
            </div >
        </div >
    )
}

export default BetSummary;