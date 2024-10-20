import React, { useState } from 'react';
import { Copy } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Leaderboard = () => {
  const [view, setView] = useState('24h');
  const [leaderboardType, setLeaderboardType] = useState('appWide');
  const [selectedPlayer, setSelectedPlayer] = useState(null); // State for selected player

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
    { place: 10, name: 'ClimateChampion', co2Reduction: '3%', practices: 0, impactScore: 50 }
  ];

  const friendsLeaderboardData = [
    { place: 1, name: 'EcoBuddy1', co2Reduction: '50%', practices: 6, impactScore: 98 },
    { place: 2, name: 'GreenPal', co2Reduction: '45%', practices: 5, impactScore: 93 },
    { place: 3, name: 'SustainableFriend', co2Reduction: '38%', practices: 4, impactScore: 88 },
    { place: 4, name: 'SustainableSam', co2Reduction: '30%', practices: 3, impactScore: 85 },
    { place: 5, name: 'PlanetProtector', co2Reduction: '28%', practices: 3, impactScore: 80 },
    { place: 6, name: 'EcoFriendly', co2Reduction: '25%', practices: 2, impactScore: 75 },
    { place: 7, name: 'GreenThumb', co2Reduction: '20%', practices: 2, impactScore: 70 }
  ];

  const handleLeaderboardTypeChange = (type) => {
    setLeaderboardType(type);
  };
  const accountData = {
    name: "Tanvi Patil",
    profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
    accountInfo: {
      co2Reduction: '35%',
      practices: 3,
      impactScore: 88,
    },
  };

  const leaderboardData = leaderboardType === 'appWide' ? appWideLeaderboardData : friendsLeaderboardData;

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      {/* Account Info Section */}
      <div className="flex items-center justify-between mb-8">
        
      <div className="flex items-center">
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

        {/* Share Profile Button with Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="border-2 border-green-800 rounded px-4 py-2 hover:bg-gray-100">
              Share Profile
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share Profile Link</DialogTitle>
              <DialogDescription>
                Copy the link to share your profile with others!
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <label htmlFor="profileLink" className="sr-only">Profile Link</label>
                <input
                  id="profileLink"
                  type="text"
                  value="https://profilelink.com/tanvipatil" // Example link
                  readOnly
                  className="border px-2 py-1 rounded w-full"
                />
              </div>
              <button type="button" className="px-3 border border-gray-300 rounded hover:bg-gray-100">
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                  Close
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <hr className="border-t border-gray-300 my-6" />

      {/* Leaderboard Type Buttons and Invite Friends */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button
            className={`${
              leaderboardType === 'appWide' ? 'bg-green-200 text-black' : 'bg-white text-black'
            } border-2 border-green-600 rounded-lg px-4 py-2 transition hover:bg-green-600 hover:text-white`}
            onClick={() => handleLeaderboardTypeChange('appWide')}
          >
            App-Wide Leaderboard
          </button>
          <button
            className={`${
              leaderboardType === 'friends' ? 'bg-green-200 text-black' : 'bg-white text-black'
            } border-2 border-green-600 rounded-lg px-4 py-2 transition hover:bg-green-600 hover:text-white`}
            onClick={() => handleLeaderboardTypeChange('friends')}
          >
            Friends Leaderboard
          </button>
        </div>

        {/* Invite Friends Modal */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="border-2 rounded px-4 py-2 border-green-800 hover:bg-gray-100">Invite Friends</button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Enter Profile Link</DialogTitle>
              <DialogDescription>
                Enter the profile link of your friend to invite them!
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <label htmlFor="friendLink" className="sr-only">Friend's Link</label>
                <input
                  id="friendLink"
                  type="text"
                  placeholder="Enter your friend's profile link"
                  className="border px-2 py-1 rounded w-full"
                />
              </div>
              <button type="button" className="px-3 border border-gray-300 rounded hover:bg-gray-100">
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <DialogFooter className="sm:justify-start">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Friend</button>
              <DialogClose asChild>
                <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                  Close
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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


      {/* Leaderboard Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-green-100">
              <th className="py-2 px-4 border">Rank</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">CO2 Reduction</th>
              <th className="py-2 px-4 border">Practices</th>
              <th className="py-2 px-4 border">Impact Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player) => (
              <tr
                key={player.place}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedPlayer(player)} // Set the selected player
              >
                <td className="py-2 px-4 border text-center">{player.place}</td>
                <td className="py-2 px-4 border">{player.name}</td>
                <td className="py-2 px-4 border text-center">{player.co2Reduction}</td>
                <td className="py-2 px-4 border text-center">{player.practices}</td>
                <td className="py-2 px-4 border text-center">{player.impactScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Player Profile Dialog */}
      {selectedPlayer && (
        <Dialog open={!!selectedPlayer} onOpenChange={(open) => !open && setSelectedPlayer(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedPlayer.name}'s Profile</DialogTitle>
              <DialogDescription>
                View the profile details of {selectedPlayer.name}.
              </DialogDescription>
            </DialogHeader>
            <p><strong>CO2 Reduction:</strong> {selectedPlayer.co2Reduction}</p>
            <p><strong>Practices:</strong> {selectedPlayer.practices}</p>
            <p><strong>Impact Score:</strong> {selectedPlayer.impactScore}</p>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                  Close
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Leaderboard;
