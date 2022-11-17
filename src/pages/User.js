import { useContext } from 'react';
import { UserLoginContext } from '../App';
import Header from '../components/Header/Header';
import Transaction from '../components/Transaction/Transaction';
import transactions from '../__mock__/transactions';

function User() {
    const {setIsLoggedIn} = useContext(UserLoginContext);

    setIsLoggedIn(true);

    return (
        <main className="main bg-dark">
            <Header />

            <h2 className="sr-only">Accounts</h2>

            {
                transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
            }
            
        </main>
    )
}

export default User