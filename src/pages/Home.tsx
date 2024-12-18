import { Table } from '../components/Table'
import BetList from '../components/BetList';
import BetSummary from '../components/BetSummary';
import NumberList from '../components/NumberList';
import Header from '../components/Header';
import TableReact from '../components/TableReact';

export default function Home() {

    return (
        <div >
            <Header />
            <div className='flex flex-col w-full pt-20 lg:flex-row lg:pt-24'>
                <div className='flex-1 order-3 lg:order-1'> <TableReact /></div>
                <div className='order-1 flex-3 lg:order-2'>
                    <BetSummary />
                    <div className="flex justify-center">
                        <Table />
                    </div>
                </div>
                <div className='flex-1 order-2 lg:order-3'> <BetList /></div>
            </div>
            {/* <div style={{ 'display': 'flex', width: '100vw' }}>
                <div style={{ flex: 1, padding: '0 32px' }}>
                </div>

                <div style={{ flex: 1, padding: '0 32px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ flex: 1 }}>
                            <NumberList />
                        </div>
                        <div style={{ flex: 1 }}>
                            <BetList />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}