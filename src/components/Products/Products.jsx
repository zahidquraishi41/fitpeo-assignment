import React from 'react'
import Searchbar from '../Searchbar'
import ProductTable from './ProductTable'
import './Products.css'


const Header = () => {
	return (
		<div className="row">

			<div className="col-md-6">
				<div className="title">
					<h5>Product Sell</h5>
				</div>
			</div>

			<div className="col-md-6">
				<div className="d-flex justify-content-end">
					<Searchbar />
					<div className="btn-group ms-2">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: '30px', fontSize: '13px' }}>
							Last 30 days
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Last 30 days</a></li>
							<li><a className="dropdown-item" href="#">Last 60 days</a></li>
							<li><a className="dropdown-item" href="#">Last 90 days</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

const Products = () => {
	return (
		<div className='card m-3'>
			<div className="card-body">

				<Header />
				<ProductTable />

			</div>
		</div>
	)
}

export default Products
