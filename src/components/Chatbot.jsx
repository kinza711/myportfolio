import { useState } from "react";
import Img from "/kinza.jpg";

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 bg-brand-teal text-white p-0.5 rounded-full shadow-lg hover:scale-110 transition-transform"
        title="Open Chatbot"
      >
        <img src={Img} alt="img" className="h-16 w-16 rounded-full" />
      </button>

      {/* Chat iframe */}
      {open && (
        <iframe
          src="https://personal-chatbotui.onrender.com/"
          className="fixed bottom-20 right-4 w-[90%] sm:w-[350px] h-[70vh] sm:h-[500px] border-none rounded-2xl shadow-xl z-50 transition-all"
        />
      )}
    </>
  );
};

export default Chatbot;
