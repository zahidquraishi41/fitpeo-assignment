import React from 'react'
import Searchbar from '../../components/Searchbar'
import './Homepage.css'
import { useSidebar } from '../../components/SidebarContext'
import Cards from '../../components/Cards/Cards'
import Charts from '../../components/Charts/Charts'


const Header = () => {
	return <div className="header">
		<div className="text">Hello Shahrukh 👋,</div>
		<Searchbar />
	</div>
}

const Homepage = () => {
	const { isCollapsed } = useSidebar();
	return <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
		<div className="container p-3">

			<Header />
			<Cards />
			<Charts />

		</div>
	</div>

}

export default Homepage
