import { lazy, Suspense } from "react"
import { 
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter
} from "react-router-dom"

const Layout = lazy(() => import("./pages/Layout"))
const Login = lazy(() => import("./pages/Login"))

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>

      </Route>
      <Route path="login" element={<Login />} />
    </Route>
  ))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
