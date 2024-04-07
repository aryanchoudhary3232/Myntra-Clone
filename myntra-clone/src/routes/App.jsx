import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <div>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default App;
