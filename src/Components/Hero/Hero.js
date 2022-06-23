import React from "react";
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
import natural from "../../assets/natural.png";

function Hero() {
	return (
		<div className='hero'>
			<ScrollContainer>
				<ScrollPage>
					<Animator animation={batch(Fade(), Sticky(), Move(600, 0, 0, -580))}>
          <img src={natural} alt="Illustration d'une bouteille de votre marque" />
					</Animator>
				</ScrollPage>
			
			</ScrollContainer>
		</div>
	);
}

export default Hero;
