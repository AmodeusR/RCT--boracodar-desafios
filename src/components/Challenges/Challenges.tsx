import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";
import "./challenges.scss";

const Challenges = () => {
  return (
    <section>
      <Link to="/">
        <ArrowLeft className="challenges__return" size={36} />
      </Link>
      <Outlet />
    </section>
  );
};

export default Challenges;
