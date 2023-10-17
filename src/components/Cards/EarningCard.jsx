const EarningCard = () => {
	return <div className="card text-center">
		<div className="card-body ">
			<div className="row align-items-center">

				{/* Icon */}
				<div className="col-6 d-flex justify-content-end">
					<div className="icon-container" style={{ backgroundColor: 'lightgreen' }}>
						<i className="icon fas fa-chart-line" style={{ color: 'green' }}></i>
					</div>
				</div>

				{/* Data */}
				<div className="col text-start card-data" style={{ paddingLeft: '0px' }}>
					<div className="card-body align-items-center" style={{ paddingLeft: '0px' }}>
						<span className="card-title text-body-secondary">Earning</span>
						<p className="card-amt">$198k</p>
						<span className="card-text">
							<i className="fas fa-solid fa-arrow-up" style={{ color: 'green' }}> 37.0% </i>
							this month
						</span>
					</div>
				</div>

			</div>
		</div>
	</div>
}

export default EarningCard
