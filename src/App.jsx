import {
  Routes,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dashboard from "./components/Dashboard/Dashboard";
import ManageProduct from "./components/Manage/ManageProduct";
import ManageStaff from "./components/Manage/ManageStaff";
import RevenueSummary from "./components/Manage/RevenueSummary";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
              <Dashboard/>
          }
        />
        <Route
          path="/manage-product"
          element={
              <ManageProduct/>
          }
        />
        <Route
          path="/manage-staff"
          element={
              <ManageStaff/>
          }
        />
         <Route
          path="/revenue"
          element={
             <RevenueSummary/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
