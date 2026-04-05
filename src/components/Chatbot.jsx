// import { useState } from "react";
// import Img from "/kinza.jpg";

// const Chatbot = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Floating chat button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-4 right-4 z-50 bg-brand-teal text-white p-0.5 rounded-full shadow-lg hover:scale-110 transition-transform"
//         title="Open Chatbot"
//       >
//         <img src={Img} alt="img" className="h-16 w-16 rounded-full" />
//       </button>

//       {/* Chat iframe */}
//       {open && (
//         <iframe
//           src="https://personal-chatbotui.onrender.com/"
//           className="fixed bottom-20 right-4 w-[90%] sm:w-[350px] h-[70vh] sm:h-[500px] border-none rounded-2xl shadow-xl z-50 transition-all"
//         />
//       )}
//     </>
//   );
// };

// export default Chatbot;

import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Img from "/kinza.jpg";

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-4 w-[90%] sm:w-[350px] h-[70vh] sm:h-[500px] flex flex-col rounded-2xl shadow-xl z-50 overflow-hidden animate-slide-up glass-effect">
          {/* Header */}
          <header className="bg-gradient-to-r from-[#1e609d] to-[#2097a7] via-[#036d68] p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 overflow-hidden rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <img src={Img} alt="pic" />
              </div>
              <div>
                <h2 className="font-semibold text-sm">Aura Mini</h2>
                <p className="text-[10px] text-indigo-100 opacity-80">
                  Kinza's AI Assistant • Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="hover:bg-white/10 p-1.5 bg-[#10398B] rounded-xl transition-colors"
            >
              <IoCloseSharp size={18} />
            </button>
          </header>

          {/* Chat iframe */}
          <iframe
            src="https://personal-chatbotui.onrender.com/"
            className="w-full h-full border-none"
          />
        </div>
      )}

      {/* Floating chat button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-50 bg-[#295dc4] p-1 rounded-full shadow-lg hover:scale-110 transition-transform"
          title="Open Chatbot"
        >
          <img src={Img} alt="Open Chat" className="h-16 w-16 rounded-full" />
        </button>
      )}
    </>
  );
};

export default Chatbot;
