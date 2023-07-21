import React from 'react'
import "../styles/navbar.css"
const navbar = () => {
    return (
        <div className='navbar'>
            <div className='assessment-box'>
                <div className='assessment-typography'>Assessment </div>
                <div className='assessment-typography'>My Assessments</div>
            </div>
            <div className='mobile-icon'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_0_451)">
                        <path d="M17 1H7.00001C5.90001 1 5.01001 1.85 5.01001 2.95V20.95C5.01001 22.05 5.90001 23 7.00001 23H17C18.1 23 19 22.05 19 20.95V2.95C19 1.85 18.1 1 17 1ZM17 19H7.00001V5H17V19Z" fill="#1C4980" />
                    </g>
                    <defs>
                        <clipPath id="clip0_0_451">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

        </div>
    )
}

export default navbar
