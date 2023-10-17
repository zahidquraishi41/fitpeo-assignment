const Searchbar = () => {
	return (
		<div className="search-bar" style={{ width: '200px' }}>
			<div className="input-group">
				<span className="input-group-text" >
					<svg width="20" height="20" viewBox="0 0 20 20">
						<path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
					</svg>
				</span>
				<input type="text" className="form-control" placeholder="Search..." style={{ fontSize: '13px' }} />
			</div>
		</div>
	)
}

export default Searchbar
