import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => (
	<div style={{position: 'absolute',top:'25%',left:'50%',marginLeft:'-10%'}}>
	<ReactLoading type={'spin'} color={'#485f71'} height={'25%'} width={'25%'} />
	</div>
);

export default Loader;