import { EmojiFlagsOutlined } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { useStateValue } from '../../StateProvider';
function Sidebar() {
  const [{user},dispatch]=useStateValue();
  return (<div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName}/>
      <SidebarRow Icon={AddBoxOutlinedIcon} title="Covid-19 Information"/>
      <SidebarRow Icon={EmojiFlagsOutlined} title="Pages"/>
      <SidebarRow Icon={PeopleAltOutlinedIcon} title="Friends"/>
      <SidebarRow Icon={MessageOutlinedIcon} title="Messenger"/>
      <SidebarRow Icon={StorefrontOutlinedIcon} title="Market Place"/>
  </div>);
}

export default Sidebar;
