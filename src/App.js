import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import DistributionPage from "./pages/DistributionPage";
import FootItemsPage from "./pages/FootItemsPage";
import StudentsPage from "./pages/StudentsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="fooditems" element={<FootItemsPage />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="Distribution" element={<DistributionPage />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
