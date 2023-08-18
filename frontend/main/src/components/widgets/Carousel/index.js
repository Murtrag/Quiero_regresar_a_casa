import "./style.css";
import Carousel from 'react-bootstrap/Carousel';
import {findChild, findChildren } from "utils/findChild";

function CarouselMod({children}) {
  const imageItems = findChildren(children, "item");

  return (
    <Carousel data-bs-theme="dark">
	{
		imageItems.map((el, i)=>{
		      const img = findChild(el.props.children, "img")
		      const title = findChild(el.props.children, "title")
		      const description = findChild(el.props.children, "description")
		      return <Carousel.Item key={i}>
			<img
			  className="d-block w-100 carousel-img"
			  {...img.props}
			/>
			<Carousel.Caption>
			  <h5>{title.props.children}</h5>
			  <p>{description.props.children}</p>
			</Carousel.Caption>
		      </Carousel.Item>
		})
	}
    </Carousel>
  );
}

export default CarouselMod;
