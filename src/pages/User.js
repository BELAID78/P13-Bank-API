import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

    useEffect(() => {
        readProfile(user.jwt).then(response => {
            //update user profil redux
            dispatch(updateProfile(response.body))

            //update user profile in localstorage
            updateUserData({...user, user: response.body});
        }).catch(err => {
            navigate('/error');
        });
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