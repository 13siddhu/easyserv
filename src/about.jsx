import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-400">
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-300">About Us</h1>

      <p className="text-lg mb-4">
        <strong>Welcome to EasyServ – Where Cleanliness Meets Convenience</strong>
      </p>

      <p className="mb-4">
        At <span className="font-semibold">EasyServ</span>, we believe a clean home is a happy home. Founded with the mission to bring reliable,
        affordable, and high-quality home cleaning services to every doorstep, we’re here to simplify your life –
        one spotless room at a time.
      </p>

      <p className="mb-4">
        We are a tech-enabled platform that connects you with trained, background-verified cleaning professionals who bring not just efficiency,
        but also a personal touch to your home. Whether it’s regular housekeeping, deep cleaning, or post-renovation
        cleanup, EasyServ ensures every corner sparkles.
      </p>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">Our Vision</h2>
        <p>
          To become India's most trusted home service brand, setting the benchmark for quality, safety, and customer delight.
        </p>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">Our Mission</h2>
        <p>
          To make professional cleaning accessible, flexible, and eco-friendly – tailored around your schedule and lifestyle.
        </p>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">What Makes Us Different?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Instant Booking & Transparent Pricing:</strong> Know exactly what you're getting and when. No surprises.</li>
          <li><strong>Vetted Professionals:</strong> Each cleaner is trained, experienced, and fully background-checked.</li>
          <li><strong>Eco-Conscious Choices:</strong> We prioritize safe and sustainable cleaning products.</li>
          <li><strong>Customer-First Approach:</strong> Your satisfaction is our #1 goal. Every service comes with a quality guarantee.</li>
        </ul>
      </div>

      <p className="mt-6 text-lg font-medium text-gray-400">
        Join thousands of happy customers who trust EasyServ to keep their homes clean, fresh, and stress-free.
      </p>
    </div>
  );
}
