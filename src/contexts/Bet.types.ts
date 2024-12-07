export type Bet = { amount: number, payload: string[] }
export type Bets = Record<string, Bet>

export type BetData = {
    amount: number,
    profit: number,
    numbers: string[]
}
export type BetsData = Record<string, BetData>

export type BetUpdateMode = 'add' | 'remove' | 'set';