import React, { useState, useEffect } from "react";
import "./BandForm.css";

function BandForm(props) {
	// http://localhost:1337/api/products/product_4mvb4a2kjt

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

	return(
		
		<div className='lower--band'>
			<form>
				<select id='products' className='form--item' name='products'>
					<option value='strawberry'>Fraise - 250ml</option>
					<option value='orange'>Orange - 250ml</option>
					<option value='apple'>Pomme - 250ml</option>
					<option value='banana'>{product?.title}</option>
				</select>
				<input
					className='form--item'
					type='number'
					id='quantity'
					name='quantity'
					min='1'
					placeholder='Quantité'
				/>
				<input className='form--item' type='submit' value='Acheter' />
			</form>
		</div>
		
	);
}

export default BandForm;
