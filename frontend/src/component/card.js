import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function Cards(props) {
    const shoes = {
        id: props.shoes.id,
        title: props.shoes.title,
        content: props.shoes.content,
        price: props.shoes.price,
        img: props.shoes.img,
    }
    return (
        <Link to={'detail/' + shoes.id}>
            <Col>
                <div style={{backgroundImage: 'url(' + shoes.img + ')', height: 200, backgroundSize: "cover"}}/>
                <h4>{shoes.title}</h4>
                <p>{shoes.content}</p>
            </Col>
        </Link>
    )
}

export default Cards;