import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <div>
            <Routes>
              <Route element={<PrivateRoute />} path="/" exact>
                <Route element={<Home />} path="/" exact />
              </Route>
              <Route element={<Login />} path="/login" exact />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
