import React from 'react'
import "./header.css"
import Avatar from '@mui/material/Avatar';

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <div className='avatar'>
                        <Avatar style={{ background: "green" }}>Sak</Avatar>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header