import './subCard.css';

function SubCard({ image, text }) {
    return (
        <div className="sub-card">
            <img src={image} alt="Nicholas" className="img-fluid" />
            <p><em>{text}</em></p>
        </div>
    );
}

export default SubCard;
