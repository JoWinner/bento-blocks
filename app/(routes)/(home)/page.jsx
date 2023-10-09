"use client";

import Miuzzic from "./components/miuzzic/miuzzic-02";
import Rosy from "./components/rosy/rosy-01";

const HomePage = () => {
  return (
    <>
      <div className="space-y-20">
        <Rosy />
        <Miuzzic />
      </div>
    </>
  );
};

export default HomePage;
