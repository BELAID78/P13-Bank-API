import Feature from '../Feature/Feature';
import FeaturesHeader from './../FeaturesHeader/FeaturesHeader';
import iconChat from './../../assets/images/icon-chat.png';
import iconMoney from './../../assets/images/icon-money.png';
import iconSecurity from './../../assets/images/icon-security.png';

import './features.css'

function Features() {
    return (
        <section className="features">
            <FeaturesHeader />

            <Feature image={iconChat} alt='Chat Icon' headertext='You are our #1 priority' contentText='Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes.' />

            <Feature image={iconMoney} alt='Money Icon' headertext='More savings means higher rates' contentText='The more you save with us, the higher your interest rate will be!' />

            <Feature image={iconSecurity} alt='Security Icon' headertext='Security you can trust' contentText='We use top of the line encryption to make sure your data and money
                    is always safe.' />
        </section>
    )
}

export default Features