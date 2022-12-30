import React from "react";
import HeaderIconsList from "./HeaderIconsList";

const Header = () => {
  return (
    <section className="w-full text-gray-600 dark:text-gray-400">
        <div className="frbc w-full">
          <h1 className="font-semibold text-xl">
            Contacts
          </h1>
          <HeaderIconsList />
        </div>
    </section>
  )
}

export default Header