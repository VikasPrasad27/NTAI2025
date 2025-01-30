import React from 'react';
import './Timeline.css'; // Importing external CSS
import Footer from '../Footer/Footer';

function ConferenceTracks() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Conference Tracks</h1>
        <div className="timeline">
          {trackData.map((track, index) => (
            <TrackSection key={index} title={track.title} topics={track.topics} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const trackData = [
  {
    title: "1. Artificial Intelligence and Machine Learning",
    topics: [
      "Generative AI for Creative Applications",
      "Large Language Models and Their Applications",
      "AI Ethics and Responsible AI",
      "AI in Healthcare and Precision Medicine",
      "Reinforcement Learning and Autonomous Systems",
      "Artificial General Intelligence"
    ]
  },
  {
    title: "2. Information Technology and Cybersecurity",
    topics: [
      "Cloud Computing and Edge AI",
      "Cybersecurity in the Age of AI",
      "Big Data Analytics and Predictive Modeling",
      "Blockchain Technology and Decentralized Systems",
      "Internet of Things (IoT) and Smart Devices",
      "Swarm Intelligence"
    ]
  },
  {
    title: "3. Advanced Computing and Emerging Technologies",
    topics: [
      "Quantum Computing and Quantum Algorithms",
      "Software Engineering for AI Systems",
      "Human-Computer Interaction and Extended Reality (ER)",
      "Digital Twins",
      "High-Performance Computing and Data Centers",
      "Neuromorphic Computing"
    ]
  },
  {
    title: "4. Management and Business Innovation",
    topics: [
      "Technology Adoption and Change Management",
      "Business Models for Sustainable Innovation",
      "Strategic Management of AI Projects",
      "Sustainable Business Practices with AI",
      "Technology-Driven Entrepreneurship"
    ]
  },
  {
    title: "5. Sustainable Engineering and Technology",
    topics: [
      "Green Building Technologies",
      "Renewable Energy Systems",
      "Smart Cities and Infrastructure",
      "Water Resource Management",
      "Sustainable Transportation",
      "Energy-Efficient Manufacturing"
    ]
  },
  {
    title: "6. Interdisciplinary Tracks",
    topics: [
      "Policy Frameworks for Tech-Driven Sustainability",
      "Education and Capacity Building with AI Tools",
      "AI for Environmental Sustainability",
      "Emerging Technologies in Rural Development",
      "Legal and Ethical Challenges in Next-Gen Technologies"
    ]
  }
];

function TrackSection({ title, topics }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <h2 className="timeline-title">{title}</h2>
      <ul className="timeline-content">
        {topics.map((topic, idx) => (
          <li key={idx} className="timeline-topic">{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default ConferenceTracks;
