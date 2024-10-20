import ExpandableCardDemo from './../../components/blocks/expandable-card-demo-standard';
import React, { useState } from 'react';
import FlipText from "./../../components/ui/flip-text";
import MeteorEffectCard from './ui/MeteorEffectCard';

function Eventcomp() {
    const cardContents = [
        {
          title: 'Tips for Sustainable Living',
          tips: [
            'Reduce, Reuse, and Recycle',
            'Use Public Transport: Decrease your carbon footprint by opting for buses or trains.',
            'Conserve Water: Small changes like shorter showers',
            'Support Local',
          ],
        },
        {
          title: 'Energy Saving Tips',
          tips: [
            'Switch to LED bulbs to save energy.',
            'Unplug electronics when not in use.',
            'Use smart thermostats for efficient heating.',
            'Install solar panels for renewable energy.',
            'Insulate your home to reduce heat loss.',
          ],
        },
        {
          title: 'Eco-Friendly Travel',
          tips: [
            'Opt for eco-friendly transport options.',
            'Take public transportation instead of personal vehicles.',
            'Travel light to reduce fuel consumption.',
            'Use reusable bottles and containers.',
            'Respect local ecosystems when traveling.',
          ],
        },
        {
          title: 'Waste Reduction Tips',
          tips: [
            'Use reusable bags instead of plastic ones.',
            'Compost food scraps to reduce landfill waste.',
            'Buy products with minimal packaging.',
            'Avoid single-use plastics like straws and utensils.',
            'Donate old clothes and items instead of throwing them away.',
          ],
        },
      ];
    

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="m-8 text-center mb-8">
        <FlipText
      className="font-bold -tracking-widest text-green dark:text-white md:text-7xl md:leading-[5rem]"
      word="Join Us!"
    />
    <h1 className="text-2xl font-bold text-green-600">for a Sustainable Future</h1>
    <p className="mt-2 text-lg text-gray-700">
          Discover eco-friendly activities, track your progress, and visualize your environmental impact without any backend services.
        </p>
      </div>

      {/* Tips Section */}
      <div className="container mx-auto p-4">
      {/* Cards in a responsive grid */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardContents.map((content, index) => (
          <MeteorEffectCard key={index} title={content.title} tips={content.tips} />
        ))}
      </div>
    </div>

      {/* Expandable Card Component */}
      <ExpandableCardDemo />
      
      {/* Call to Action Section */}
      <div className="text-center mt-8 p-4 border-t border-gray-300">
        <h2 className="text-2xl font-semibold text-green-600">Ready to Make a Change?</h2>
        <p className="mt-2 text-gray-700">Participate in our upcoming events and start your journey towards a more sustainable lifestyle!</p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Explore Events
        </button>
      </div>
    </div>
  );
}

export default Eventcomp;
