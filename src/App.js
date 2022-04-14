import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const BasePage = lazy(() => import("./pages/Base"));
const NewsPage = lazy(() => import("./pages/News"));

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <BasePage />
          </Suspense>
        }
      />
      <Route
        path="news"
        element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <NewsPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
