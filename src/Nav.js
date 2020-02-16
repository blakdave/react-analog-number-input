import React from "react";
import classNames from "classnames";

const Nav = ({ icon, change, type, value, numbers }) => {
  const evt = type === "add";
  const disabled = type === "add" ? value === numbers.length - 1 : value === 0;

  return (
    <div
      className={classNames(`input-nav ${type}`, {
        disabled
      })}
      onClick={() => change(evt)}
    >
      {icon}
    </div>
  );
};

export default Nav;
