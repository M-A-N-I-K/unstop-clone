import React, { useState } from 'react'
import "../styles/assessmentPage.css"
import Navbar from "./navbar"
import AssessmentInfo from './Utils/assessmentInfo'
import NewAssessmentCard from './Utils/newAssessmentCard'
import AssessmentCard from './Utils/assessmentCard'
import AssessmentForm from './Utils/newAssessmentForm'

const assessmentPage = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <div className='assessment-page'>
                <Navbar />
                <div className='assessment-overview'>
                    <h5>Assessments Overview</h5>
                    <AssessmentInfo />
                    <div className='my-assessment'>
                        <p>My Assessment</p>
                        <div className='assessment-icons'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4229_127)">
                                    <path d="M14.2083 12.8333H13.4842L13.2275 12.5858C14.1258 11.5408 14.6667 10.1842 14.6667 8.70833C14.6667 5.4175 11.9992 2.75 8.70833 2.75C5.4175 2.75 2.75 5.4175 2.75 8.70833C2.75 11.9992 5.4175 14.6667 8.70833 14.6667C10.1842 14.6667 11.5408 14.1258 12.5858 13.2275L12.8333 13.4842V14.2083L17.4167 18.7825L18.7825 17.4167L14.2083 12.8333ZM8.70833 12.8333C6.42583 12.8333 4.58333 10.9908 4.58333 8.70833C4.58333 6.42583 6.42583 4.58333 8.70833 4.58333C10.9908 4.58333 12.8333 6.42583 12.8333 8.70833C12.8333 10.9908 10.9908 12.8333 8.70833 12.8333Z" fill="#1C4980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4229_127">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4229_131)">
                                    <path d="M4.25 5.66C4.35 5.79 9.99 12.99 9.99 12.99V19C9.99 19.55 10.44 20 11 20H13.01C13.56 20 14.02 19.55 14.02 19V12.98C14.02 12.98 19.51 5.96 19.77 5.64C20.03 5.32 20 5 20 5C20 4.45 19.55 4 18.99 4H5.01C4.4 4 4 4.48 4 5C4 5.2 4.06 5.44 4.25 5.66Z" fill="#1C4980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4229_131">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 16V5H4V16H0ZM6 16V0H10V16H6ZM12 16V9H16V16H12Z" fill="#1C4980" />
                            </svg>
                        </div>
                    </div>
                    <div className='assessment-cards'>
                        <NewAssessmentCard clicked={clicked} setClicked={setClicked} />
                        <AssessmentCard />
                        <AssessmentCard />
                    </div>
                </div>
            </div>
            <AssessmentForm clicked={clicked} setClicked={setClicked} />
        </>
    )
}

export default assessmentPage
