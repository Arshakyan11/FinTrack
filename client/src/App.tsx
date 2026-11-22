import { Route, Routes } from "react-router";
import "./App.scss";
import LayOut from "./LayOut/LayOut";
import { ROUTES } from "./routes/Route";
import { Login, Registration, Dashboard, Home, Faq } from "./pages";
function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<LayOut />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.FAQ} element={<Faq />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
