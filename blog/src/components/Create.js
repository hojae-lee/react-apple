/* eslint-disable */
import React, { useState, useEffect } from 'react';
import loader from '@ibsheet/loader'

let ibsheet = {};

const IBSheet8 = (props) => {
	const sheetId = props.id, sheetEl = props.el, sheetOptions = props.options;

	useEffect(() => {
		loader.createSheet({
			id: sheetId,
			el: sheetEl,
			options: sheetOptions
		})
		.then(function(sheet) {
			// 시트 객체가 만들어졌는지 확인.
			ibsheet = sheet;
		});
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
