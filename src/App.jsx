// import Home from "./pages/HomePage";

// function App() {
//   return (
//     <>
//       <div className="main">
//         <Home />
//         <iframe
//           src="https://personal-chatbotui.onrender.com/"
//           style={{
//             position: "fixed",
//             bottom: "20px",
//             right: "20px",
//             width: "350px",
//             height: "500px",
//             border: "none",
//             borderRadius: "20px",
//             zIndex: 9999,
//           }}
//         />
//       </div>
//     </>
//   );
// }

// export default App;

import Home from "./pages/HomePage";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <div className="main z-10">
        <Home />
      </div>
      <Chatbot />
    </>
  );
}

export default App;
