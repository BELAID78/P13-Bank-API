import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import Transaction from '../components/Transaction/Transaction';
import { readProfile } from '../services/loginService';
import { readUserData, updateUserData } from '../utils/localStorageHelper';
import { updateProfile } from '../utils/userSlice';
import transactions from '../__mock__/transactions';

function User() {

    const user = readUserData();

    const dispatch = useDispatch();

    const userState = useSelector(state => state.user)

    useEffect(() => {
        readProfile(user.jwt).then(response => {
            if(response.status === 200) {
                //update user profil redux
                dispatch(updateProfile(response.body))

                //update user profile in localstorage
                updateUserData({...user, user: response.body});
            }else{
                //redirect to error page
            }
        }).catch(err => console.log(err));
    }, [user.jwt, dispatch])

    return (
        <main className="main bg-dark">
            <Header firstName={userState.user.firstName} lastName={userState.user.lastName} />

            <h2 className="sr-only">Accounts</h2>

            {
                transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
            }
            
        </main>
    )
}

export default User