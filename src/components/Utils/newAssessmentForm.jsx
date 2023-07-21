import React from 'react'
import "../../styles/newAssessmentForm.css"
const myAssessment = ({ clicked, setClicked }) => {
    return (
        <div className='new-assessment-form' style={{
            display: `${clicked ? "flex" : "none"}`
        }}>
            <div className='assessment-form' style={{
                display: `${clicked ? "flex" : "none"}`,
                transform: `${clicked ? "translateY(0px)" : "translateY(1000px"}`,
                transition: "transform 2s ease-out",
            }}>
                <div className='header'>
                    <h6>Create New Assessment</h6>
                    <svg onClick={() => setClicked(!clicked)} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3033 22.071L15 16.7677L9.6967 22.071L7.92893 20.3033L13.2322 15L7.92893 9.69668L9.6967 7.92891L15 13.2322L20.3033 7.92891L22.0711 9.69668L16.7678 15L22.0711 20.3033L20.3033 22.071Z" fill="#323232" />
                    </svg>
                </div>
                <div className='body'>
                    <label htmlFor="assessment">Name of Assessment</label>
                    <input type="text" className='form-input' placeholder='Type Here' />
                    <label htmlFor="purpose">Purpose of the test is</label>
                    <div className="form-input">
                        <p>Select</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_0_1682)">
                                <path d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="#1C4980" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_1682">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <label htmlFor="description">Description</label>
                    <div className='form-input'>
                        <p>Select</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_0_1682)">
                                <path d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="#1C4980" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_1682">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <label htmlFor="skills">Skills</label>
                    <div className='skills'>
                        <div className='icons'>
                            <div className='skill-icon'>UI/UX and Design <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_1698)">
                                    <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#1C4980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1698">
                                        <rect width="18" height="18" rx="9" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></div>
                            <div className='skill-icon'>UI/UX and Design <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_1698)">
                                    <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#1C4980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1698">
                                        <rect width="18" height="18" rx="9" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></div>
                            <div className='skill-icon'>UI/UX and Design <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_1698)">
                                    <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#1C4980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1698">
                                        <rect width="18" height="18" rx="9" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></div>
                            <div className='skill-icon'>UI/UX and Design <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_1698)">
                                    <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#1C4980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1698">
                                        <rect width="18" height="18" rx="9" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></div>
                            <div className='skill-icon'>UI/UX and Design <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_1698)">
                                    <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#1C4980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1698">
                                        <rect width="18" height="18" rx="9" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></div>
                        </div>
                    </div>
                    <input type="text" className='form-input' placeholder='Type Here' />
                    <label htmlFor="Duration">Duration of assessment</label>
                    <input type="text" className='form-input' placeholder='Type Here' />
                </div>
                <div className='save-footer'>
                    <button className='save-btn'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default myAssessment
