import './Card.css'

const BalanceCard = () => {
	return <div className="card text-center">
		<div className="card-body ">
			<div className="row align-items-center">

				{/* Icon */}
				<div className="col-6 d-flex justify-content-end">
					<div className="icon-container" style={{ backgroundColor: 'skyblue' }}>
						<i className="icon fas fa-solid fa-wallet" style={{ color: 'blue' }}></i>
					</div>
				</div>

				{/* Data */}
				<div className="col text-start card-data" style={{ paddingLeft: '0px' }}>
					<div className="card-body align-items-center" style={{ paddingLeft: '0px' }}>
						<span className="card-title text-body-secondary">Balance</span>
						<p className="card-amt">$2.4k</p>
						<span className="card-text">
							<i className="fas fa-solid fa-arrow-down" style={{ color: 'red' }}> 13.7% </i>
							this month
						</span>
					</div>
				</div>

			</div>
		</div>
	</div>
}

export default BalanceCard
