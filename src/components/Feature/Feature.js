import './feature.css'

function Feature({image, alt, headertext, contentText}) {
    return (
        <div className="feature-item">
            <img src={image} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{headertext}</h3>
            <p>
                {contentText}
            </p>
        </div>
    )
}

export default Feature