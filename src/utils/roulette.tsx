import { BetData } from "../contexts/Bet.types";

export function getNumberNameByIndex(i: number): string {
    return i === 0 ? '00' : i === 1 ? '0' : (i - 1).toString()
}

export function calculatePayoutByNumber(numberName: string, betsData: Array<[string, BetData]>): number {
    let payout = 0
    for (let data of betsData) {
        const { amount, numbers } = data[1]
        if (numbers.includes(numberName))
            payout += calculatePayout(data[0], amount)
    }
    return payout;
}

export function calculatePayout(betId: string, amount: number) {
    if (betId.length < 3) return amount * 36; // one number
    if (betId.split('-').length === 2) return amount * 18 // 1-2
    if (betId.split('-').length === 3) return amount * 12 // 0-1-2 
    if (betId.split('-').length === 4) return amount * 9 // 8-9-11-12
    if (betId.split('-').length === 6) return amount * 6
    if (betId.includes('TO')) return amount * 2;
    if (betId.includes('OZEN')) return amount * 3;
    if (betId.includes('OLUMN')) return amount * 3;
    if (['BLACK', 'RED', 'ODD', 'EVEN'].includes(betId)) return amount * 2;
    return amount;
}
/*
50 - first double strip
50 - second double strip
125 - 19 to 36
*/