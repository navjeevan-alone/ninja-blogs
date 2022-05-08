import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Update from "./Update";
import Error from "./Error";
import { Routes, Route, useLocation } from "react-router-dom";
function AnimatedRoutes({ time }) {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create time={time} />} />
      <Route path="/blog/:id" element={<BlogDetails time={time} />} />
      <Route path="/blog/edit/:id" element={<Update time={time} />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AnimatedRoutes;
