import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
  return (
    <div className='header'>
        <div className="icons">
            <div className='icon'><NotificationsNoneIcon style={{ color: '#209bd8' }}/></div>
            <div className='icon'><BrandingWatermarkIcon style={{ color: '#209bd8' }}/></div>
            <div className='icon'><LogoutIcon style={{ color: '#209bd8' }} /></div>
        </div>
    </div>
  )
}

export default Header