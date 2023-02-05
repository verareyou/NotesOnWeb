import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./scenes/Navbar.jsx";
import Main from "./scenes/Main.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useState } from "react";
import { motion } from "framer-motion";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        notes: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://notesonweb.onrender.com/graphql",
  cache,
});

function App() {
  const [mouseCursor, setMouseCursor] = useState({
    x: 0,
    y: 0,
  });

  const screenwidth = window.innerWidth;

  useEffect(() => {
    const setMousePosition = (e) => {
      setMouseCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", setMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", setMousePosition);
    };
  }, []);

  const variants = {
    middle: {
      x: mouseCursor.x,
      y: mouseCursor.y,
    },
  };

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div className="app w-full ">
            {
              screenwidth > 1024 && (
                <motion.div
                  style={{
                    transition: "0.1s ",
                    translateY: "-50%",
                    translateX: "-50%",
                    // opacity-0 md:opacity-100 
                  }}
                  variants={variants}
                  animate="middle"
                  className="mousecursor  absolute h-10 w-10 border border-white rounded-full "
                />
              )}{
              screenwidth > 1024
              && (
                <motion.div
                  style={{
                    // transition: "0.05s",
                    translateY: "-50%",
                    translateX: "-50%",
                  }}
                  variants={variants}
                  animate="middle"
                  className="mousecursorpoint absolute h-4 w-4 border bg-white border-white rounded-full "
                />
              )
            }
            <motion.div
                animate={{ x: mouseCursor.x * 0.05 }}

            className="absolute text-[#545454] bottom-0 font-thin text-[4rem] max-lg:text-3xl max-lg:m-4 max-lg:top-0 transform -translate-x-[50%] "
            >
              <h1>Notes On Web</h1>
            </motion.div>
            {/* <div className="absolute flex flex-row h-[100%] top-[0] right-[8%] ">
              <motion.div
                animate={{ x: mouseCursor.x * 0.05 }}
                className={`h-full w-[0.5px] bg-[#767676]   `}
              />
            </div> */}
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
