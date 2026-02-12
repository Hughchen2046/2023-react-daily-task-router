import Register from "./Register";
import Login from "./Login";

const Routes = [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: 'home',
            element: <Home />
          },
          {
            path: 'about',
            element: <About />
          }
        ]
      }
    ]

export default Routes;