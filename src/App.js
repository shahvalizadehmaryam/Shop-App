import { useState } from "react";
import ProductProvider, { useProduct } from "./provider/productProvider";
import Layout from "./Layout/Layout";
import { Switch, Route } from "react-router";
import routes from "./routes";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
            {routes.map((route) => (
              <Route {...route} key={route.id} />
            ))}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
