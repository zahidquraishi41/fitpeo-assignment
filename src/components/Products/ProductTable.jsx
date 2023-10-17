import React from 'react';
import abstract from '../../images/abstract.jpeg'
import windows from '../../images/windows.jpg'

const Product = ({ title, img }) => {
	return <div className='d-flex'>
		<div>
			<img src={img} alt="..." height={40} width={50} style={{ borderRadius: '10px', marginRight: '10px' }} />
		</div>
		<div className="product-desc" >
			<p>{title}</p>
			<span style={{ fontSize: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
		</div>
	</div>
}

const data = [
	{ productName: <Product title='Abstract 3D' img={abstract} />, stock: 32, price: 45.99, totalSales: 20 },
	{ productName: <Product title='Sarphens Illustration' img={windows} />, stock: 32, price: 45.99, totalSales: 20 },
];

const ProductTable = () => {
	return (
		<div className="table-responsive">
			<table className="table table-borderless" id='pd1'>
				<thead>
					<tr>
						<th style={{ width: '60%', fontWeight: 'normal' }}>Product Name</th>
						<th style={{ width: '15%', fontWeight: 'normal' }}>Stock</th>
						<th style={{ width: '15%', fontWeight: 'normal' }}>Price</th>
						<th style={{ width: '10%', fontWeight: 'normal' }}>Total Sales</th>
					</tr>
					<tr>
						<th colSpan="4">
							<hr style={{ borderBottom: '2px solid #ccc', margin: 0}} />
						</th>
					</tr>
				</thead>

				<tbody>
					{data.map((item, index) => (
						<tr key={index} >
							<td>{item.productName}</td>
							<td>{item.stock} in stock</td>
							<td style={{ fontWeight: 'bold' }}>$ {item.price}</td>
							<td>{item.totalSales}</td>
						</tr>
					))}
				</tbody>

			</table>
		</div>
	);
};

export default ProductTable;
