import { Link } from 'react-router-dom';

const Communities = () => {
  // Environment-related community data
  const communities = [
    { id: 1, name: 'Sustainable Living', description: 'Tips and discussions on living an eco-friendly lifestyle.' },
    { id: 2, name: 'Climate Action', description: 'Community focused on mitigating climate change.' },
    { id: 3, name: 'Zero Waste', description: 'Join the movement to reduce waste and promote sustainability.' },
    { id: 4, name: 'Renewable Energy', description: 'Exploring solar, wind, and other renewable energy sources.' },
    { id: 5, name: 'Clean Oceans', description: 'Discussion on saving marine ecosystems and reducing plastic waste.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Environmental Communities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {communities.map((community) => (
          <Link
            to={`/community/${community.id}`}
            key={community.id}
            className="bg-white shadow-md hover:shadow-lg rounded-lg p-5 cursor-pointer transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{community.name}</h2>
            <p className="text-gray-600">{community.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Communities;
