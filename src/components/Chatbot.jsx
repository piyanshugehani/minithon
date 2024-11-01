// src/components/Chatbot.js
import { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.text = `
            import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";

Chatbot.init({
    chatflowid: "e1674df2-33a0-435f-9438-62d1a2685e1c",
    apiHost: "http://localhost:3000",
    chatflowConfig: {
        // topK: 2
    },
    theme: {
        button: {
            backgroundColor: "rgba(34, 193, 195, 0.9)",
            right: 25,
            bottom: 25,
            size: 64, // small | medium | large | number
            dragAndDrop: true,
            iconColor: "white",
            customIconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjSb-EeN-2gkTfhSdKburs49JvFk48kTkHw&s",
        },
        chatWindow: {
            showTitle: true,
            title: 'Powered by EcoSphere',
            titleAvatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjSb-EeN-2gkTfhSdKburs49JvFk48kTkHw&s',
            showAgentMessages: true,
            welcomeMessage: 'I am here to help you with eco-friendly practices and FAQs!', // Concise welcome message
            errorMessage: 'Sorry, something went wrong. Please try again.',
            backgroundColor: "rgba(3, 7, 18, 1)", // Set chat window background to RGBA color
            height: 500,
            width: 400,
            fontSize: 16,
            starterPromptFontSize: 15,
            clearChatOnReload: false,
            botMessage: {
                backgroundColor: "black",
                textColor: "rgba(34, 193, 195, 0.9)",
                showAvatar: false,
                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
            },
            userMessage: {
                backgroundColor: "black",
                textColor: "rgba(34, 193, 195, 0.9)",
                showAvatar: true,
                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
            },
            textInput: {
                placeholder: 'Ask here..',
                backgroundColor: '#ffffff',
                textColor: '#303235',
                sendButtonColor: 'rgba(34, 193, 195, 0.9)',
                maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                autoFocus: true,
                sendMessageSound: true,
                receiveMessageSound: true,
            },
            feedback: {
                color: '#303235',
            },
            footer: {
                textColor: '#303235',
                text: '',
                company: '',
                companyLink: 'https://minithon-ecosphere.vercel.app/',
                container: '#chatbot'
            }
        }
    }
});

        `;
        document.body.appendChild(script);

        // Cleanup the script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="chatbot" className="chatbot-container" style={{ position: 'fixed', bottom: '20px', right: '20px', width: '300px' }}></div>
    );
};

export default Chatbot;
