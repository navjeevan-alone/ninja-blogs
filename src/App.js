import "./css/App.css";
import "./css/Styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TagsInput from "./components/TagsInput";
// import AnimatedRoutes from "./components/AnimatedRoutes";
import Home from "./components/Home";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import Update from "./components/Update";
import Error from "./components/Error";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const date = new Date();
  let time = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} 
    `;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create time={time} />} />
        <Route path="/blog/:id" element={<BlogDetails time={time} />} />
        <Route path="/blog/edit/:id" element={<Update time={time} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
