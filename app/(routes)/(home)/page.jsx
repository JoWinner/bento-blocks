"use client";

import Miuzzic from "./components/miuzzic-01/miuzzic-01";
import Rosy from "./components/rosy-01/rosy-01";

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
