import React from "react";
import Search from "./Search";

function Header({doSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search doSearch={doSearch}/>
    </header>
  );
}

export default Header;
