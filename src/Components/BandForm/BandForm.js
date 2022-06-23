import React from "react";
import "./BandForm.css";

function BandForm(props) {
	return (
		<div className='lower--band'>
			<form>
				<select id='products' className="form--item" name='products'>
					<option value='strawberry'>Fraise - 250ml</option>
					<option value='orange'>Orange - 250ml</option>
					<option value='apple'>Pomme - 250ml</option>
					<option value='banana'>Banane - 250ml</option>
				</select>
                <input className="form--item" type='number' id='quantity' name='quantity'min="1" placeholder='Quantité' />
                <input className="form--item" type="submit" />
			</form>
		</div>
	);
}

export default BandForm;
