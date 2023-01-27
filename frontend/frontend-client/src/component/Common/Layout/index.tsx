import React from "react";
import Navbar from "../Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className="pb-16">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
