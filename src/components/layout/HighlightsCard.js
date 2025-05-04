import "../../styles/HighlightsCard.css";
import { NavLink } from 'react-router-dom';
import { MdDeliveryDining } from "react-icons/md";

const HighlightsCard = ({ dish })=> {
    return (
        <article className="dish-card">
            <div className="dish-img">
                <img src={ dish.image } alt={ dish.title } />
            </div>
            <div className="dish-title">
                <h3>{ dish.title }</h3>
                <span className="price-tag">{ dish.price }</span>
            </div>
            <div className="dish-description">
                <p>{ dish.description }</p>
                <NavLink to='/order-online'>
                    Order a delivery <MdDeliveryDining size={20} style={{ color: "#333333" }} />
                </NavLink>
            </div>
        </article>
    );
};

export default HighlightsCard;