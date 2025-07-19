import React from "react";

const MaxWidthWrapper = ({ children, className }) => {
  return <section className={`mx-auto max-w-7xl px-6 py-20 lg:px-8 ${className}`}>{children}</section>;
};

export default MaxWidthWrapper;
