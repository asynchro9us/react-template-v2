import { BrowserRouter, Route, Routes } from "react-router"
import { ROUTE_HOME } from "./constants"
import { Home, NotFound } from "./pages"
import { Main } from "./layouts"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_HOME} element={<Main />}>
          <Route path={ROUTE_HOME} element={<Home />} />
        </Route>
        <Route path="*"
          element={
            <Main>
              <NotFound />
            </Main>
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App