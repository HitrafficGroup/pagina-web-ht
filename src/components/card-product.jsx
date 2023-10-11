import t320 from "../assets/t320.png";
import PropTypes from "prop-types";
export default function CardProduct(props){
    const imageDefault = <img src={t320} alt="product content" width={280} />
    const { text = "Menu Item",title="none",img=imageDefault  } = props;
    return(
        <>
            <div className="product-content">
                {img}
                
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="btn-product" onClick={props.callbackFunction}>
                    DETALLES
                </div>
            </div>
        
        </>
    )
}
CardProduct.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
    img:PropTypes.any,
    callbackFunction:PropTypes.func,
};