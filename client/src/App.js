import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import Layouts from "./components/admin/Layouts";
import UserListPage from "./pages/AdminPage/User/UserListPage";
import ProductListPage from "./pages/AdminPage/Product/ProductListPage";
import ProductEntryPage from "./pages/AdminPage/Product/ProductEntryPage";
import ProductDetailsPage from "./pages/AdminPage/Product/ProductDetailsPage";
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
          <AdminPanel>
            <AdminPage />
          </AdminPanel>
        </Route>

        <Route path="/admin/products" exact>
          <AdminPanel>
            <ProductListPage />
          </AdminPanel>
        </Route>
        <Route path="/admin/products/create" exact>
          <AdminPanel>
            <ProductEntryPage />
          </AdminPanel>
        </Route>
        <Route path="/admin/products/:id" exact>
          <AdminPanel>
            <ProductDetailsPage />
          </AdminPanel>
        </Route>
        <Route path="/admin/users" exact>
          <AdminPanel>
            <UserListPage />
          </AdminPanel>
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

const AdminPanel = ({ children }) => {
  return (
    <>
      <ProtectedRoutes>
        <Layouts>{children}</Layouts>
      </ProtectedRoutes>
    </>
  );
};

export default App;
