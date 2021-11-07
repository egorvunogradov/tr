import React from 'react';
import PropTypes from 'prop-types';
import Pair from './components/Pair';
import {Cell, Search, View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import {PanelHeader } from '@vkontakte/vkui';

const Home = () => (
	<div>
	<PanelHeader>Трейдер</PanelHeader>
	<Search />
	<Pair pairs="BTCUSDT" coinname="BTC" fullname="Bitcoin"/>
	<Pair pairs="BNBUSDT" coinname="BNB" fullname="Binance"/>
	<Pair pairs="ETHUSDT" coinname="ETH" fullname="Ethereum"/>
	<Pair pairs="BCCUSDT" coinname="BCC" fullname="Bitcoin Cash"/>
	<Pair pairs="NEOUSDT" coinname="NEO" fullname="Neo"/>
	<Pair pairs="LTCUSDT" coinname="LTC" fullname="Litecoin"/>
	<Pair pairs="QTUMUSDT" coinname="QTUM" fullname="Qtum "/>
	<Pair pairs="XRPUSDT" coinname="XRP" fullname="Ripple"/>
	<Pair pairs="EOSUSDT" coinname="EOS" fullname="Eos"/>
	<Pair pairs="ETCUSDT" coinname="ETC" fullname="Ethereum Classic"/>	
 	</div>
	
);

export default Home;
