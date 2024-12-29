import React from 'react'
import { Play, Clock } from 'lucide-react'

interface VideoSectionProps {
  url: string;
  title: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ url, title }) => {
  const embedUrl = url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/').split('&')[0];

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <div className="bg-[#0d1117] py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-32">
          <span className="text-purple-400 mb-4 block">Why You'll Love Learning Here</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Quality, Structure, and Real Results
          </h2>
        </div>

        {/* First Feature */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Play className="text-purple-500" size={20} />
              <span className="text-purple-400">Let's master cold calling with AI</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Today at WintaX Technologies
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
            We’ve built an AI-powered phone calling assistant that takes care of your outbound & inbound calls—even cold calls! 
            Our smart assistant talks to your customers in real time 
            </p>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <VideoSection 
              url="https://youtu.be/1Zr5PcAzOks?si=8Z84uWsiAiO0aMnD"
              title="The Best Tech Jobs for 2025: High Demand & High Pay"
            />
          </div>
        </div>

        {/* Second Feature */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <VideoSection 
              url="https://youtu.be/sy9c7fqoPlM?si=ZBAqRzvrT65y0HRg"
              title="The Best Tech Jobs for 2025: High Demand & High Pay"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-purple-500" size={20} />
              <span className="text-purple-400">Straightforward and to the point</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Full Stack AI Powered Calculator 
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Built with AI magic and full-stack technology, this calculator does more than math—it understands you! 
              It’s like having a personal tutor in your pocket.
            </p>
          </div>
        </div>

        {/* Third Feature */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40 mt-40">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Play className="text-purple-500" size={20} />
              <span className="text-purple-400">Let's master your data in seconds</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Building RAG Over Excel Files
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Our RAG (Retrieval-Augmented Generation) system makes working with Excel files smarter and easier!
              It’s like having a data scientist on your team.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <VideoSection 
              url="https://youtu.be/-5_--b6V40M?si=PHgooa2Qm_veHmwy "
              title="The Best Tech Jobs for 2025: High Demand & High Pay"
            />
          </div>
        </div>

        {/* 4th Feature */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <VideoSection 
              url="https://youtu.be/DQ-NFVj_JhE?si=8APoMBCKlb8TDjnZ"
              title="The Best Tech Jobs for 2025: High Demand & High Pay"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-purple-500" size={20} />
              <span className="text-purple-400">Straightforward and to the point</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Intelligant Chatbot With ML Models
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
            A full-stack AI bot that learns fast and responds smartly—trained on your data in seconds! 
            Custom AI Models – Train it on your data instantly!
            </p>
          </div>
        </div>

        {/* 5th Feature */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40 mt-40">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Play className="text-purple-500" size={20} />
              <span className="text-purple-400">Let's master your data in seconds</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Object Detection Pipeline
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
            A TensorFlow-powered object detection pipeline that trains on any object images in real time—get your model ready in minutes!
            Upload images and let AI do the rest!
            </p>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <VideoSection 
              url="https://youtu.be/g66DXhLtoeA?si=nYLviT9OAhHfedsx"
              title="The Best Tech Jobs for 2025: High Demand & High Pay"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

