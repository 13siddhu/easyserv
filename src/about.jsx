import React from 'react';
import { useNavigate } from 'react-router-dom';

const about = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          Hello! I'm <span className="font-semibold text-blue-600">Siddhartha Singh</span>, a Computer Science and Engineering student at VIT Bhopal University (Batch 2023–2027), with a CGPA of 7.7. I'm passionate about crafting digital experiences that solve real-world problems.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          As a tech-savvy developer, I've interned as a Web Developer at Cosmic365 and built several projects including <span className="font-medium text-gray-900">VirtuSync</span> (a real-time video calling platform), <span className="font-medium text-gray-900">Sid Blogs</span>, and a <span className="font-medium text-gray-900">Live Weather Forecast App</span>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I'm currently focused on full-stack development and backend engineering, especially technologies like Node.js, Express, MongoDB, and JWT. I'm also working on exciting ideas like emotion-based feedback in video calls and AI-driven tools for agriculture.
        </p>
        <p className="text-lg leading-relaxed">
          Inspired by Dr. APJ Abdul Kalam, I strive to combine technology with purpose and contribute meaningfully to society. Let’s connect and build something impactful together!
        </p>
      </div>
    </section>
  );
};

const navigate = useNavigate();

export default about;
