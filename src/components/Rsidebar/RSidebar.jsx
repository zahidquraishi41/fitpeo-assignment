import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import StairsRoundedIcon from '@mui/icons-material/StairsRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import userPicture from '../../images/user_picture.jpg';
import { useEffect, useState } from 'react';
import { useSidebar } from '../SidebarContext'
import './RSidebar.css'


const Profile = () => {
	return <div className="profile-card">
		<div className="profile-img">
			<img src={userPicture} className="profile-img" alt="..." />
		</div>
		<div className="profile-info">
			<span className="profile-name">Evano</span>
			<span className="profile-role">Project Manager</span>
		</div>
	</div>
}

const RSidebar = () => {
	const {isCollapsed, setIsCollapsed} = useSidebar()

	const handleResize = () => {
		window.innerWidth < 768 ? setIsCollapsed(true) : setIsCollapsed(false)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	return <div className='sidebar'>
		<Sidebar collapsed={isCollapsed}>

			<div className="sidebar-header">
				<MenuRoundedIcon className='me-3' cursor='pointer' onClick={() => setIsCollapsed(!isCollapsed)} />
				{!isCollapsed && <h5 className='mb-0 fs-3'>Fitpeo</h5>}
			</div>

			<Menu className="sidebar-menu">
				<MenuItem className='sidebar-item' icon={<GridViewRoundedIcon />}> Dashboard </MenuItem>
				<SubMenu className='sidebar-item' label="Product" icon={<ViewInArIcon />}></SubMenu>
				<SubMenu className='sidebar-item' label="Customers" icon={<AccountBoxRoundedIcon />}></SubMenu>
				<SubMenu className='sidebar-item' label="Income" icon={<AccountBalanceWalletRoundedIcon />}></SubMenu>
				<SubMenu className='sidebar-item' label="Promote" icon={<StairsRoundedIcon />}></SubMenu>
				<SubMenu className='sidebar-item' label="Help" icon={<ContactSupportRoundedIcon />}></SubMenu>
			</Menu>

			{!isCollapsed && <Profile />}

		</Sidebar>
	</div>
}

export default RSidebar
