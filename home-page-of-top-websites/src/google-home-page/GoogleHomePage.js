import React from 'react'
import googleLogo from './imgs/googlelogo_color_272x92dp.png';
import './GoogleHomePage.css';
import Navbar from './comps/navbar/Navbar';
import Footer from './comps/footer/Footer';
import Stack from '@mui/material/Stack';

function GoogleHomePage() {
  return (
    <div className='google-style'>
        <Navbar/>
        <Stack spacing={4} justifyContent="flex-end"
  alignItems="center" className="main-body">
            <img src={googleLogo} alt="google Logo"/>
            <input placeholder="Search.."/>
            <Stack  direction="row" spacing={1} className="languages-style">
                <span>Google offered in:</span>
                <span>हिन्दी</span>
                <span>বাংলা</span>
                <span>తెలుగు</span>
                <span>मराठी</span>
                <span>தமிழ்</span>
                <span>ગુજરાતી</span>
                <span>മലയാളം</span>
                <span>ਪੰਜਾਬੀ</span>
            </Stack>
        </Stack>
        <Footer/>
    </div>
  )
}

export default GoogleHomePage