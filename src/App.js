import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PATHS } from "./const";

const BasePage = lazy(() => import("./pages/Base"));
const NewsPage = lazy(() => import("./pages/News"));

const App = () => {
  return (
    <Routes>
      <Route
        path={PATHS.MAIN}
        element={
          <Suspense fallback={null}>
            <BasePage />
          </Suspense>
        }
      />
      <Route
        path={PATHS.NEWS}
        element={
          <Suspense fallback={null}>
            <NewsPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
