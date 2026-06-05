import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 title="Header" className="header">
        {title}
      </h1>

      <h3 title="heading" className="header" data-testid="heading-2">
        Animals
      </h3>
    </>
  );
}
