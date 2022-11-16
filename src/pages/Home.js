import { useContext } from 'react';
import { UserLoginContext } from '../App';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';

function Home() {
    const {isLoggedIn, setIsLoggedIn} = useContext(UserLoginContext);

    setIsLoggedIn(false);
    
    return (
        <main>
            <Hero />
            <Features />
        </main>
    )
}

export default Home