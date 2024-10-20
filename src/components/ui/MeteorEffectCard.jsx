import React from 'react';
function MeteorEffectCard({ title, tips }) {
  return (
    <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg overflow-hidden text-white max-w-sm">
      <div className="absolute inset-0 bg-meteor-effect opacity-50 pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <ul className="list-disc list-inside space-y-2">
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
      {/* <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
        Explore More
      </button> */}
    </div>
  );
}
export default MeteorEffectCard;
