import React, { useState } from 'react';

const Leaderboard = () => {
  const [view, setView] = useState('24h');
  const [leaderboardType, setLeaderboardType] = useState('appWide');

  // App-wide leaderboard data
  const appWideLeaderboardData = [
    { place: 1, name: 'BabyKnight', winrate: '64%', kda: '1.23', rank: 'Challenger' },
    { place: 2, name: 'Rootless', winrate: '64%', kda: '1.23', rank: 'Challenger' },
    { place: 3, name: 'Teodorr2000', winrate: '64%', kda: '1.23', rank: 'Challenger' },
    { place: 4, name: 'Rens', winrate: '64%', kda: '1.23', rank: 'Challenger' },
    { place: 5, name: 'Edwin', winrate: '64%', kda: '1.23', rank: 'Challenger' },
    { place: 6, name: 'FlyWithMe', winrate: '49%', kda: '5.23', rank: 'Challenger' },
    { place: 7, name: 'BigBob007', winrate: '49%', kda: '5.23', rank: 'Grandmaster' },
    { place: 8, name: 'Pudge', winrate: '49%', kda: '5.23', rank: 'Master' },
    { place: 9, name: 'n0nameplayer', winrate: '34%', kda: '1.23', rank: 'Master' },
    { place: 10, name: 'Kimberly Mastrangelo', winrate: '34%', kda: '1.23', rank: 'Gold' },
  ];

  // Friends-only leaderboard data
  const friendsLeaderboardData = [
    { place: 1, name: 'BestFriend1', winrate: '78%', kda: '3.45', rank: 'Challenger' },
    { place: 2, name: 'BuddyGuy', winrate: '64%', kda: '2.10', rank: 'Master' },
    { place: 3, name: 'FriendZone', winrate: '58%', kda: '4.20', rank: 'Grandmaster' },
    { place: 4, name: 'BestieBob', winrate: '50%', kda: '1.89', rank: 'Diamond' },
    { place: 5, name: 'CoolFriend', winrate: '48%', kda: '2.30', rank: 'Platinum' },
  ];

  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };

  const handleLeaderboardTypeChange = (type) => {
    setLeaderboardType(type);
  };

  const leaderboardData = leaderboardType === 'appWide' ? appWideLeaderboardData : friendsLeaderboardData;

  return (
    <div className="min-h-screen bg-green-50 p-6 md:p-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-left">
          <h1 className="text-4xl font-extrabold text-green-900 leading-tight mb-2">Inside the Green Initiative</h1>
          <p className="text-gray-500">Latest news and leaderboards on environmental projects.</p>
        </div>

      </div>

      {/* Combined Leaderboard Type and Invite Friends Button */}
      <div className="flex justify-between items-center mb-6">
  <div className="flex space-x-4">
    <button
      className={`${
        leaderboardType === 'appWide' ? 'bg-white text-black' : 'bg-white text-black'
      } "bg-white text-black border-2 border-green-800 rounded-lg px-4 py-2 rounded-l-lg hover:bg-green-600 transition`}
      onClick={() => handleLeaderboardTypeChange('appWide')}
    >
      App-Wide Leaderboard
    </button>
    <button
      className={`${
        leaderboardType === 'friends' ? 'bg-white text-black' : 'bg-white text-black'
      } "bg-white text-black px-4 py-2 border-2 border-green-800 rounded-lg rounded-r-lg hover:bg-green-600 transition`}
      onClick={() => handleLeaderboardTypeChange('friends')}
    >
      Friends Leaderboard
    </button>
  </div>
  <button className="bg-white text-black px-4 py-2 border-2 border-green-800 rounded-lg shadow hover:bg-white transition-all ml-auto">
    Invite Friends
  </button>
</div>



      {/* Navigation for Rank/Winrate/KDA */}
    

      {/* Filter Buttons */}
      {/* <div className="flex justify-between mb-8">
        <div className="flex space-x-4">
          <button
            className={`${
              view === '24h' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
            } px-4 py-2 rounded-lg hover:bg-green-600 transition`}
            onClick={() => handleViewChange('24h')}
          >
            24h
          </button>
          <button
            className={`${
              view === '7d' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
            } px-4 py-2 rounded-lg hover:bg-green-600 transition`}
            onClick={() => handleViewChange('7d')}
          >
            7D
          </button>
          <button
            className={`${
              view === '30d' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
            } px-4 py-2 rounded-lg hover:bg-green-600 transition`}
            onClick={() => handleViewChange('30d')}
          >
            30D
          </button>
          <button
            className={`${
              view === 'seasonal' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
            } px-4 py-2 rounded-lg hover:bg-green-600 transition`}
            onClick={() => handleViewChange('seasonal')}
          >
            Seasonal
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">Queue</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Show my place</button>
        </div>
      </div> */}

      {/* Top 3 Players Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {leaderboardData.slice(0, 3).map((player, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg bg-white border ${
              player.place === 1 ? 'border-yellow-500' : player.place === 2 ? 'border-gray-500' : 'border-orange-500'
            } hover:shadow-2xl transition-shadow`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-green-900">{player.name}</h2>
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
            <p className="text-gray-500 mt-2">Winrate: {player.winrate}</p>
            <p className="text-gray-500">KDA: {player.kda}</p>
            <p className="text-gray-500">Rank: {player.rank}</p>
          </div>
        ))}
      </div>

      {/* Full Leaderboard Section */}
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KDA</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaderboardData.map((player, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.place}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{player.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.winrate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.kda}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
