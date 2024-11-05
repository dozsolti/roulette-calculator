import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { calculatePayout, calculatePayoutByNumber, getNumberNameByIndex } from '../utils/roulette';
import { Bets, BetData } from './Bet.types';

const BetContext = createContext<{
    bets: Bets,
    betsData: Array<[string, BetData]>,
    numberList: Array<{ name: string, profit: number }>
    total: number,
    updateBet: (betId: string, amount: number, mode:
        'add' | 'remove', payload: string[]
    ) => any,
    clearBets: () => void,
}>(null as any);

const BetProvider = ({ children }: { children: ReactNode }) => {

    const [bets, setBets] = useState<Bets>({
        // '1-2-3-4-5-6': { amount: 50, payload: '1-2-3-4-5-6'.split('-') },
        //  '7-8-9-10-11-12': { amount: 50, payload: '7-8-9-10-11-12'.split('-') },
        //  '19 TO 36': { amount: 125, payload: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'] }
        

        // "1ST_COLUMN": { amount: 25, payload: ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34'], },
        // "3RD_COLUMN": { amount: 25, payload: ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36'] },
        // "1ST_DOZEN": { amount: 25, payload: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] },
        // "2ND_DOZEN": { amount: 25, payload: ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'] },
    });
    const total = useMemo(() => Object.entries(bets).reduce((acc, [_, value]) => acc + value.amount, 0), [bets])
    const betsData = useMemo<Array<[string, BetData]>>(() => {
        return (Object.entries(bets)
            .map(([betId, data]) => (
                [betId, {
                    amount: data.amount,
                    profit: calculatePayout(betId, data.amount) - total,
                    numbers: data.payload
                }]
            )
            ))
    }, [bets, total])

    const numberList = useMemo(() => {
        let v = []
        for (let i = 0; i < 38; i++) {
            let name = getNumberNameByIndex(i)
            v.push({
                name,
                profit: calculatePayoutByNumber(name, betsData) - total
            })
        }
        return v;
    }, [betsData, total])

    const updateBet = (betId: string, betAmount: number, mode: 'add' | 'remove', payload: string[]) => {

        setBets(state => {
            let amount = 0
            if (betId in state)
                amount = state[betId].amount

            amount += (mode === 'add' ? 1 : -1) * betAmount
            if (amount < 0) {
                return state
            }
            if (amount === 0) {
                delete state[betId];
                return { ...state };
            }
            return {
                ...state,
                [betId]: { amount, payload },
            }
        })

    }

    const clearBets = () => {
        setBets({})
    }



    return (
        <BetContext.Provider value={{ bets, betsData, numberList, total, updateBet, clearBets }}>
            {children}
        </BetContext.Provider>
    );
};


export const useBets = () => useContext(BetContext);
export { BetProvider, BetContext };