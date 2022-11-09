import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrincipalPage from "./pages/PrincipalPage";
import Create from "./pages/Create";
import View from "./pages/View";
import Store from "./store/store";

export default function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrincipalPage />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}
