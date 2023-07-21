import React from 'react'
import "../../styles/newAssessmentCard.css"

const newAssessmentCard = ({ clicked, setClicked }) => {
    return (
        <>
            <div className='new-assessment-card' onClick={() => setClicked(!clicked)}>
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_0_553)">
                        <path d="M31.6667 22.1667H21.6667V32.1667H18.3334V22.1667H8.33337V18.8333H18.3334V8.83334H21.6667V18.8333H31.6667V22.1667Z" fill="#0073E6" />
                    </g>
                    <defs>
                        <clipPath id="clip0_0_553">
                            <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                <h6>New Assessment</h6>
                <p>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
            </div>
        </>
    )
}

export default newAssessmentCard
