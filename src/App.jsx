import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import Contact from "./pages/Contact";
import BlogContextProvider from "./Context/Context";

const App = () => {
  return (
    <BlogContextProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Posts/:slug" element={<PostDetails />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BlogContextProvider>
  );
};

export default App;
