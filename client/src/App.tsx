import { Route, Routes } from "react-router";
import styles from "./App.scss";
import LayOut from "./LayOut/LayOut";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ROUTES } from "./routes/Route";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<LayOut />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
