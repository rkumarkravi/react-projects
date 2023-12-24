import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreateRecipeV3 from "./pages/create-recipe/CreateRecipeV3";
import ViewRecipe from "./pages/ViewRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        element: <CreateRecipeV3 />,
        path:"/create-your-recipe"
      },{
        element: <ViewRecipe />,
        path:"/view-recipe/:recipeId",
        loader: async ({ params }) => {
          return fetch(`/recipes/${params.recipeId}`);
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
