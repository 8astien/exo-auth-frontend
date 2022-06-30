import React, {useState, useEffect} from "react";
import {
	Animator,
	ScrollContainer,
	ScrollPage,
	batch,
	Fade,
	Move,
	Sticky,
} from "react-scroll-motion";
import "./Hero.css";


function Hero() {

	const [product, setProduct] = useState();

	const getApiData = async () => {
		const response = await fetch(
			"http://localhost:1337/api/products/product_4mvb4a2kjt"
		).then((response) => response.json());

		setProduct(response);
	};
	
	useEffect(() => {
		getApiData();
	}, []);


	return (
		<div className='hero'>
			<ScrollContainer>
				<ScrollPage>
					<Animator animation={batch(Fade(), Sticky(), Move(600, 0, 0, -580))}>
          <img src={product?.image} alt="Illustration d'une bouteille de votre marque" />
					</Animator>
				</ScrollPage>
			
			</ScrollContainer>
		</div>
	);
}

export default Hero;
