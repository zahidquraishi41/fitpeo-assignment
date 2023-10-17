const TotalSalesCard = () => {
	return <div className="card text-center">
		<div className="card-body ">
			<div className="row align-items-center">

				{/* Icon */}
				<div className="col-6 d-flex justify-content-end">
					<div className="icon-container" style={{ backgroundColor: '#f699cd' }}>
						<svg className="icon" style={{ fill: '#e11584' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
							<path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
						</svg>
					</div>
				</div>

				{/* Data */}
				<div className="col text-start card-data" style={{ paddingLeft: '0px' }}>
					<div className="card-body align-items-center" style={{ paddingLeft: '0px' }}>
						<span className="card-title text-body-secondary">Total Sales</span>
						<p className="card-amt">$89k</p>
						<span className="card-text">
							<i className="fas fa-solid fa-arrow-up" style={{ color: 'green' }}> 13.8% </i>
							this month
						</span>
					</div>
				</div>

			</div>
		</div>
	</div>
}

export default TotalSalesCard
