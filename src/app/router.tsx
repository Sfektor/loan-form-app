import { createBrowserRouter } from "react-router-dom"
import { Wizard } from "../components"
import { wizardSteps } from '../config'
import { HomePage, NotFoundPage } from '../pages'
import App from './App'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/:step",
        element: <Wizard steps={wizardSteps} />,
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
])