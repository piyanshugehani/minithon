import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-white dark:bg-black p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Doubts & Replies for Community {communityId}</h1>
      <div className="max-w-5xl mx-auto space-y-6">
        {doubts.map((doubt, index) => (
          <motion.div
            key={doubt.id}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.5 }} // Sequential delay for each question
          >
            <motion.h2
              className="text-xl font-semibold mb-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {doubt.question}
            </motion.h2>
            <div className="space-y-2 mt-4">
              {doubt.replies.map((reply, idx) => (
                <motion.p
                  key={idx}
                  className="text-gray-600 bg-gray-100 p-3 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.5 + idx * 0.2 }} // Staggered delay for replies
                >
                  {reply}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Doubts;
