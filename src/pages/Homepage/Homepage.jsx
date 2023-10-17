import React from 'react'
import Searchbar from '../../components/Searchbar'
import './Homepage.css'


const Header = () => {
	return <div className="header">
		<div className="text">Hello Shahrukh 👋,</div>
		<Searchbar />
	</div>
}

const Homepage = () => {
	return <div className='content'>
		<div className="container p-3">

			<Header />

		</div>
	</div>

}

export default Homepage
