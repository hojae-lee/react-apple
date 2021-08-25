/* eslint-disable */
import React, { useState, useEffect } from 'react';
import loader from '@ibsheet/loader'

const IBSheet8 = (props) => {
	const sheetId = props.id, sheetEl = props.el, sheetOptions = props.options;

	function success () {
		// console.log(sheet);
	}

	useEffect(() => {
		loader.createSheet({
			id: sheetId,
			el: sheetEl,
			options: sheetOptions
		})
		.then(success())
		return () => {
			loader.removeSheet(sheetId);
		}
	}, []);

	return (
		<>
			<div id="sheetDiv" style={ {width:'700px', height: '800px'} }></div>
		</>
	);
}

export default IBSheet8;
