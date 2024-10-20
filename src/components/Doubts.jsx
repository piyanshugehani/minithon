import { useParams } from 'react-router-dom';

const Doubts = () => {
  const { communityId } = useParams();

  // Environment-related doubts and replies
  const doubts = [
    {
      id: 1,
      question: 'How can I reduce my carbon footprint at home?',
      replies: [
        'Start by using energy-efficient appliances and switching to LED lighting.',
        'Consider installing solar panels or using green energy providers.',
      ],
    },
    {
      id: 2,
      question: 'What are the best ways to conserve water?',
      replies: [
        'Fix leaks, install water-saving showerheads, and use rainwater for gardening.',
        'Turn off the tap when brushing your teeth and use a water-efficient dishwasher.',
      ],
    },
    {
      id: 3,
      question: 'How can we encourage the use of public transport?',
      replies: [
        'Advocate for better public transport options and emphasize the environmental benefits.',
        'Carpooling and cycling are also great alternatives for short-distance travel.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Doubts & Replies for Community {communityId}</h1>
      <div className="max-w-5xl mx-auto space-y-6">
        {doubts.map((doubt) => (
          <div key={doubt.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{doubt.question}</h2>
            <div className="space-y-2 mt-4">
              {doubt.replies.map((reply, idx) => (
                <p key={idx} className="text-gray-600 bg-gray-100 p-3 rounded-lg">{reply}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doubts;
