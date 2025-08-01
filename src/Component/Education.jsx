import "./Education.css";

function Education() {
    return (
        <div className="education-container">
            <h1 className="education-title">Educational Journey</h1>

            <div className="timeline-container">
                <div className="timeline-line"></div>

                <div className="timeline-node left">
                    <div className="timeline-date-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="education-card">
                        <h2 className="education-level">Primary Education</h2>
                        <div className="education-details">
                            <p>7As and 2Bs</p>
                            <p>G.C.E (Ordinary Level) Examination </p>
                            <p>Medirigiriya National School</p>

                        </div>
                    </div>
                </div>

                {/* 2019-2022 Secondary Education - Right side */}
                <div className="timeline-node right">
                    <div className="timeline-date-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="education-card">
                        <h2 className="education-level">Secondary Education</h2>
                        <div className="education-details">
                            <p>BBC (Physical Science)</p>
                            <p>G.C.E (Advanced Level) Examination </p>
                            <p>Medirigiriya National School</p>
                        </div>
                    </div>
                </div>

                {/* 2023-2024 Foundation - Left side */}
                <div className="timeline-node left">
                    <div className="timeline-date-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="education-card">
                        <h2 className="education-level">Foundation</h2>
                        <div className="education-details">
                            <p>Web Design for Beginners course</p>
                            <p>Open Learning Platform</p>
                            <p>University of Moratuwa</p>
                        </div>
                    </div>
                </div>

                {/* 2024-Present University - Right side */}
                <div className="timeline-node right">
                    <div className="timeline-date-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="education-card">
                        <h2 className="education-level">University</h2>
                        <div className="education-details">
                            <p>BSc (Hons) Information Technology (UG)</p>
                            <p>Faculty of Information Technology</p>
                            <p>University of Moratuwa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;