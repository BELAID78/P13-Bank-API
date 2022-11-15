import HeroHeader from "../HeroHeader/HeroHeader"
import Typography from "../Typography/Typography"
import './heroContent.css'

function HeroContent() {
    return (
        <section className="hero-content">
            <HeroHeader text='Promoted Content' />
            <Typography classname='subtitle' text='No fees.' />
            <Typography classname='subtitle' text='No minimum deposit.' />
            <Typography classname='subtitle' text='High interest rates.' />
            <Typography classname='text' text='Open a savings account with Argent Bank today!' />
        </section>
    )
}

export default HeroContent