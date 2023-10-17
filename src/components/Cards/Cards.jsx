import EarningCard from './EarningCard';
import OrdersCard from './OrdersCard';
import BalanceCard from './BalanceCard';
import TotalSalesCard from './TotalSalesCard';
import './Card.css';

import React from 'react';

const Cards = () => {
	return (
		<div className="row m-1">
			<div className="col-12 col-md-6 col-lg-3 mb-3">
				<EarningCard />
			</div>
			<div className="col-12 col-md-6 col-lg-3 mb-3">
				<OrdersCard />
			</div>
			<div className="col-12 col-md-6 col-lg-3 mb-3">
				<BalanceCard />
			</div>
			<div className="col-12 col-md-6 col-lg-3 mb-3">
				<TotalSalesCard />
			</div>
		</div>
	);
};

export default Cards;
