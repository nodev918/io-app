import React from "react";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo left">
            io-app
          </a>
          <ul id="nav-mobile" className="right ">
            <li>
              <a href="sass.html">Chat</a>
            </li>
            <li>
              <a href="badges.html">Note</a>
            </li>
            <li>
              <a href="collapsible.html">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
