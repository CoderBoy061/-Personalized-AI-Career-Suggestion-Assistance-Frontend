import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./isProtectedRoute";
import Login from "./pages/auth/Login";
import HomePage from "./pages/home/Home";
import ContactPage from "./pages/home/Contact";
import FeaturesPage from "./pages/home/Feature";
const AllRoutes = ({ isAuthenticated }) => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        ></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
