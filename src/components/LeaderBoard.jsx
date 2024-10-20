import React, { useState } from 'react';

const Leaderboard = () => {
  const [view, setView] = useState('24h');
  const [leaderboardType, setLeaderboardType] = useState('appWide');

  // App-wide leaderboard data
  const appWideLeaderboardData = [
    { place: 1, name: 'EcoWarrior', co2Reduction: '40%', practices: 5, impactScore: 95 },
    { place: 2, name: 'GreenGiant', co2Reduction: '35%', practices: 4, impactScore: 90 },
    { place: 3, name: 'SustainableSam', co2Reduction: '30%', practices: 3, impactScore: 85 },
    { place: 4, name: 'PlanetProtector', co2Reduction: '28%', practices: 3, impactScore: 80 },
    { place: 5, name: 'EcoFriendly', co2Reduction: '25%', practices: 2, impactScore: 75 },
    { place: 6, name: 'GreenThumb', co2Reduction: '20%', practices: 2, impactScore: 70 },
    { place: 7, name: 'WasteWatcher', co2Reduction: '15%', practices: 1, impactScore: 65 },
    { place: 8, name: 'NatureLover', co2Reduction: '10%', practices: 1, impactScore: 60 },
    { place: 9, name: 'RecycleRanger', co2Reduction: '5%', practices: 1, impactScore: 55 },
    { place: 10, name: 'ClimateChampion', co2Reduction: '3%', practices: 0, impactScore: 50 },
  ];

  // Friends-only leaderboard data
  const friendsLeaderboardData = [
    { place: 1, name: 'EcoBuddy1', co2Reduction: '50%', practices: 6, impactScore: 98 },
    { place: 2, name: 'GreenPal', co2Reduction: '45%', practices: 5, impactScore: 93 },
    { place: 3, name: 'SustainableFriend', co2Reduction: '38%', practices: 4, impactScore: 88 },
    { place: 4, name: 'EarthAdvocate', co2Reduction: '30%', practices: 3, impactScore: 80 },
    { place: 5, name: 'PlanetPal', co2Reduction: '28%', practices: 2, impactScore: 78 },
  ];

  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };

  const handleLeaderboardTypeChange = (type) => {
    setLeaderboardType(type);
  };

  const leaderboardData = leaderboardType === 'appWide' ? appWideLeaderboardData : friendsLeaderboardData;

  // Sample account data
  const accountData = {
    name: "Tanvi Patil",
    profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
    accountInfo: {
      co2Reduction: '35%',
      practices: 3,
      impactScore: 88,
    },
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      {/* Account Info Section */}
      <div className="flex items-center mb-8">
        <img
          src={accountData.profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full mr-4 border-4 border-green-600 shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-green-800">{accountData.name}</h2>
          <div className="flex flex-col">
            <p className="text-gray-600">CO2 Reduction: {accountData.accountInfo.co2Reduction}</p>
            <p className="text-gray-600">Practices: {accountData.accountInfo.practices}</p>
            <p className="text-gray-600">Impact Score: {accountData.accountInfo.impactScore}</p>
          </div>
        </div>
      </div>

      {/* Combined Leaderboard Type and Invite Friends Button */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button
            className={`${
              leaderboardType === 'appWide' ? 'bg-green-200 text-white' : 'bg-white text-black'
            } border-2 border-green-600 rounded-lg px-4 py-2 transition hover:bg-green-600 hover:text-white`}
            onClick={() => handleLeaderboardTypeChange('appWide')}
          >
            App-Wide Leaderboard
          </button>
          <button
            className={`${
              leaderboardType === 'friends' ? 'bg-green-200 text-white' : 'bg-white text-black'
            } border-2 border-green-600 rounded-lg px-4 py-2 transition hover:bg-green-600 hover:text-white`}
            onClick={() => handleLeaderboardTypeChange('friends')}
          >
            Friends Leaderboard
          </button>
        </div>
        <button className="bg-green-200 text-white px-4 py-2 border-2 border-green-600 rounded-lg shadow hover:bg-green-600 transition">
          Invite Friends
        </button>
      </div>

      {/* Top 3 Players Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {leaderboardData.slice(0, 3).map((player, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md bg-white border ${
              player.place === 1 ? 'border-yellow-500' : player.place === 2 ? 'border-gray-500' : 'border-orange-500'
            } hover:shadow-xl transition-shadow`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-green-800">{player.name}</h2>
              <span
                className={`${
                  player.place === 1
                    ? 'text-yellow-500'
                    : player.place === 2
                    ? 'text-gray-500'
                    : 'text-orange-500'
                } text-4xl`}
              >
                {player.place === 1 ? '🏆' : player.place === 2 ? '🥈' : '🥉'}
              </span>
            </div>
            <p className="text-gray-600 mt-2">CO2 Reduction: {player.co2Reduction}</p>
            <p className="text-gray-600">Sustainable Practices: {player.practices}</p>
            <p className="text-gray-600">Impact Score: {player.impactScore}</p>
          </div>
        ))}
      </div>

      {/* Full Leaderboard Section */}
      <div className="overflow-hidden border-2 border-green-800 bg-white rounded-lg shadow">
        <table className="min-w-full  divide-y divide-gray-200">
          <thead className="bg-green-200 border-b-2 border-green-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Player</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">CO2 Reduction</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Practices</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Impact Score</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaderboardData.map((player, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{player.place}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{player.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{player.co2Reduction}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{player.practices}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{player.impactScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
