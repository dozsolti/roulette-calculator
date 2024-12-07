import { useState } from 'react';
import { RouletteTable } from 'react-casino-roulette';

import 'react-casino-roulette/dist/index.css';
import { useBets } from '../contexts/Bet';

export const Table = () => {
    const { updateBet, clearBets, simplify } = useBets()
    const [betsUI, setBetsUI] = useState({});
    const [mode, setMode] = useState<'add' | 'remove'>('add')

    const chipsMap: any = {
        whiteChip: {
            icon: 'https://github.com/IvanAdmaers/react-casino-roulette/blob/main/example/public/images/chips/white-chip.png?raw=true',
            value: 1,
        },
        blueChip: {
            icon: 'https://github.com/IvanAdmaers/react-casino-roulette/blob/main/example/public/images/chips/blue-chip.png?raw=true',
            value: 10,
        },
        blackChip: {
            icon: 'https://github.com/IvanAdmaers/react-casino-roulette/blob/main/example/public/images/chips/black-chip.png?raw=true',
            value: 100,
        },
        cyanChip: {
            icon: 'https://github.com/IvanAdmaers/react-casino-roulette/blob/main/example/public/images/chips/cyan-chip.png?raw=true',
            value: 500,
        },
    };

    const [activeChip, setActiveChip] = useState<any>(Object.keys(chipsMap)[0]);

    const handleChipChange = (event: any) => {
        const chipName = event.target.closest('[data-name]').dataset.name;

        setActiveChip(chipName);
    };

    const handleBet = (betData: any) => {
        const { id, payload } = betData;
        const { icon, value } = chipsMap[activeChip];

        updateBet(id, value, mode, payload)

        setBetsUI((prevState) => {
            const state = JSON.parse(JSON.stringify(prevState));

            if (mode === 'remove' && !(id in state))
                return state;

            if (!(id in state)) {
                state[id] = {
                    icon,
                    number: 0,
                };
            }
            let amount = state[id].number + (mode === 'add' ? 1 : -1) * value

            if (amount === 0) {
                return Object.fromEntries(Object.entries(state).filter(x => x[0] !== id))
            } else
                state[id] = {
                    ...state[id],
                    icon,
                    number: amount,
                };


            return state;
        });
    };

    const clear = () => {
        setBetsUI({})
        clearBets();
    }


    return (
        <div style={{ maxWidth: 800, minWidth: 600, margin: 'auto 0' }}>
            <RouletteTable bets={betsUI} onBet={handleBet} />
            <ul className="chips">
                {Object.entries(chipsMap).map(([name, { icon }]: [string, any]) => (
                    <li
                        key={name}
                        data-name={name}
                        className={activeChip === name ? 'active' : ''}
                        onClick={handleChipChange}
                    >
                        <img width={36} height={36} src={icon} alt="chip" />
                    </li>
                ))}
            </ul>
            <div className='flex flex-row justify-center'>
                {/* <button className='px-3 py-1 bg-gray-600 rounded-sm' onClick={simplify}>Simplify bets</button> */}
                <button className='px-3 py-1 bg-gray-600 rounded-sm' onClick={clear}>Clear</button>
            </div>
        </div>
    );
};