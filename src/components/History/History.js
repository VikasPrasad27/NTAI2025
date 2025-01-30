import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Footer from "../Footer/Footer";
import '../../App.css';

export default function History() {
    return (
        <>
            <Container fluid className="p-0">
                <div className="absolute overflow-hidden">
                    <div className="absolute inset-0 justify-center mt-5">
                        <div className="bg-shape1 bg-1 opacity-c bg-blur mx-3 mt-5"></div>
                        <div className="bg-shape2 bg-2 opacity-c bg-blur mt-5"></div>
                        <div className="bg-shape1 bg-3 opacity-c bg-blur mt-5"></div>
                    </div>
                </div>
            </Container>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} md={8} className="mx-auto text-center">
                        <h1 className="his-text">History</h1>
                        <p className="text-justify mt-4 mb-4">
                            On May 23rd, 2023, Sri Lanka hosted the 1st International Conference on Living Values
                            Education (LVE), a landmark event marking a pivotal shift in the nation's educational
                            landscape. Held at the University of Jayewardenepura, this remarkable gathering convened
                            over 200 participants from across Sri Lanka and the broader Asian region.
                        </p>
                        <p className="mt-4 mb-4">
                            This conference signified a powerful collaboration between the Sri Lankan Ministry of
                            Education, universities, schools, NGOs, and higher learning institutions. The Association
                            for Living Values Education International (ALIVE) played a particularly significant role,
                            launching a series of events specifically designed to introduce the LVE Approach within Sri
                            Lanka.
                        </p>
                        <p className="mt-4 mb-4">
                            The launch encompassed a one-day conference alongside two professional development workshops
                            focused on LVE. One workshop targeted Sri Lankan primary school teachers, equipping them
                            with the necessary tools to seamlessly integrate values-based education into their
                            classrooms. The other workshop specifically addressed government university career guidance
                            counsellors, ensuring graduates enter the workforce with a robust foundation in ethical
                            principles and strong values.
                        </p>
                        <p className="mt-4 mb-4">
                            The conference's international presence was nothing short of impressive. ALIVE Associates
                            and Focal Points for LVE from ten Asian nations, including Australia, Cambodia, China,
                            India, Indonesia, Maldives, Myanmar, Nepal, Philippines, and Vietnam, joined their Sri
                            Lankan colleagues. This gathering fostered a vibrant exchange of ideas across cultures,
                            sparking critical discussions on the future of education, particularly for Sri Lankan
                            students and youth.
                        </p>
                        <p className="mt-4 mb-4">
                            A core focus of the conference discussions revolved around the paramount importance of
                            integrating values into the educational system. Participants overwhelmingly acknowledged the
                            necessity of a values-based approach to effectively address contemporary challenges.
                            Profound questions were raised regarding the very purpose of education and its efficacy if
                            not grounded in fundamental values such as love, peace, respect, honesty, care, and
                            responsibility.
                        </p>
                        <p className="mt-4 mb-4">
                            The conference culminated in a spirit of unwavering commitment and collaborative action.
                            Action plans were meticulously formulated, goals were established, and new friendships were
                            forged. The event concluded with a celebratory finale, a vibrant testament to the joy of
                            shared experiences and the enduring importance of fostering a nurturing and uplifting
                            educational environment.
                        </p>
                        <p className="mt-4 mb-4">
                            The 1st International Conference on Living Values Education in Sri Lanka undoubtedly stands
                            as a historic event, signifying a significant step towards integrating values into the
                            nation's educational system. This pivotal moment paves the way for building a future
                            generation grounded in strong ethical principles, ensuring a brighter future for Sri Lanka.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-3 text-center">
                <iframe src="https://drive.google.com/file/d/1AIR38asmtfMojxuruVUh_UNADUypH9oP/preview" width="100%"
                        height="680" allow="autoplay"></iframe>
                <Footer/>
            </Container>
        </>
    );
}