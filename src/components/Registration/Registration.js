import React from 'react';
import { Container, Row, Col,Table } from 'react-bootstrap';
import Footer from "../Footer/Footer";
import '../../App.css';
import './Registration.css';

export default function Registration() {
    return (
        <>
            <Container className="registration-container text-center">

{/* Conference Registration Section */}
<Row>
    <Col xs={12}>
        <h1 className="RegHead fw-bold">Conference Registration</h1>
        <p>All conference participants must pay the conference registration fee. For each extended abstract, at least one author must attend and pay the registration fee. Delegates can choose any of the options given below to participate at the Conference.</p>
        
        {/* Payment Methods Card */}
        <div className="d-flex justify-content-center">
            <div className="card text-center mt-5 w-50">
                <div className="card-header">
                    <h2>Payment Methods</h2>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Method:</strong> Bank Transfer</li>
                    <li className="list-group-item"><strong>Account Name:</strong> INDIRA COLLEGE OF ENGINEERING & MANAGEMENT </li>
                    <li className="list-group-item"><strong>Bank:</strong> INDUSIND BANK LTD</li>
                    <li className="list-group-item"><strong>Branch:</strong> WAKAD, PUNE</li>
                    <li className="list-group-item"><strong>IFSC Code:</strong> INDB0000999</li>
                    <li className="list-group-item"><strong>Account Number:</strong> 201025452641</li>
                </ul>
            </div>
        </div>

        {/* Registration Fees Table */}
        <h2 className="mt-5 mb-3">Registration Fees</h2>
          < Table striped bordered hover className="yellowBg">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Amount in INR (₹) Indian Delegate</th>
                    <th>Amount in USD ($) Foreign Delegate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Paper Registration for students</td>
                    <td>4000</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Paper Registration for Research scholars</td>
                    <td>5000</td>
                    <td>65</td>
                </tr>
                <tr>
                    <td>Paper Registration for Industry Professionals</td>
                    <td>6000</td>
                    <td>75</td>
                </tr>
                <tr>
                    <td>Co-Author Registration</td>
                    <td>2000</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>Conference Attendee</td>
                    <td>2000</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>Pre-conference Workshop</td>
                    <td>600</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>Poster Presentation</td>
                    <td>600</td>
                    <td>15</td>
                </tr>
            </tbody>
        </Table>

        {/* Conference Registration Fee Includes */}
        <h2 className="mt-5 mb-3">Conference Registration Fee Includes</h2>
        <center>
            <div className="reg-text w-50">Admission to research sessions</div>
            <div className="reg-text">All conference materials</div>
            <div className="reg-text">Tea/coffee and lunch</div>
            <div className="reg-text">Certificate of Attendance</div>
        </center>

        {/* Cancellation Policy */}
        <h2 className="mt-5">Cancellation Policy</h2>
        <p>The registration fees shall not be refundable in case of any cancellation or non-attendance due to any form of personal faults.</p>
    </Col>
</Row>

                {/* Submission Guidelines Section */}
                <Row>
                    <Col xs={12}>
                        <div className="submission-guidelines">
                            <h1>Submission Guidelines</h1>

                            <div className="section">
                                <h3>Paper Categories</h3>
                                <p>
                                    <span className="highlight">Research Papers:</span> Original research in next-gen tech and AI.
                                </p>
                                <p>
                                    <span className="highlight">Review Papers:</span> Reviews of current advancements and future trends.
                                </p>
                                <p>
                                    <span className="highlight">Case Studies:</span> Real-world applications of sustainable technologies.
                                </p>
                                <p>
                                    <span className="highlight">Posters:</span> Visual presentations of innovative ideas and early research.
                                </p>
                            </div>

                            <div className="section">
                                <h3>Formatting and Submission</h3>
                                <p>
                                    Submit papers in <span className="highlight">LaTeX</span> or <span className="highlight">PDF</span> format through the conference portal. Follow the official template for formatting.
                                </p>
                                <p>
                                    Papers should not exceed <span className="highlight">10 pages</span> (including references). Case studies and posters should be <span className="highlight">5 pages max</span>.
                                </p>
                            </div>

                            <div className="section">
                                <h3>Important Dates</h3>
                                <p><span className="important">Submission Deadline:</span> 20th February 2025</p>
                                <p><span className="important">Notification of Acceptance:</span> 28th February 2025</p>
                                <p><span className="important">Camera-Ready Submission:</span> 15th March 2025</p>
                                <p><span className="important">Conference Dates:</span> 12th & 13th April 2025</p>
                            </div>

                            <div className="section">
                                <h3>Review and Publication</h3>
                                <p>
                                    All submissions will go through a double-blind peer review. Accepted papers will be published in the conference proceedings, indexed by <span className="highlight">Taylor & Francis</span> and <span className="highlight">Scopus</span>.
                                </p>
                            </div>

                            <div className="section">
                                <h3>Ethical Considerations</h3>
                                <p>Ensure your submission is original and not published elsewhere. Properly cite and acknowledge all references.</p>
                            </div>

                            <div className="section">
                                <h3>Contact</h3>
                                <p>For any queries, please contact the organizing committee at [research@indiraicem.ac.in].</p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

            <Footer />
        </>
    );
}
