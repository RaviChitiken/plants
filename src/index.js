import React from "react";
import ReactDOM from "react-dom/client";
import PlantsData from "./PlantsData";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    {React.Children.toArray(PlantsData.map((p) => <Card {...p} />))}
    <Footer />
  </>
);
