import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <FrontendLayout>
            <HomePage />
          </FrontendLayout>
        </Route>
        <Route path="/login" exact>
          <FrontendLayout>
            <LoginPage />
          </FrontendLayout>
        </Route>
        <Route path="/register" exact>
          <FrontendLayout>
            <RegisterPage />
          </FrontendLayout>
        </Route>
        <Route path="/admin" exact>
          <ProtectedRoutes>
            <AdminPage />
          </ProtectedRoutes>
        </Route>
      </Switch>
    </>
  );
};

const FrontendLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default App;
