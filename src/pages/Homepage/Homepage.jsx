import React from 'react'
import Searchbar from '../../components/Searchbar'
import './Homepage.css'
import { useSidebar } from '../../components/SidebarContext'


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

		</div>
	</div>

}

export default Homepage
