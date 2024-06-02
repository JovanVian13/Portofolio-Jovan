import React from "react";

const Button = ({children, margin, click}) => {
    return (
      <button className={`bg-defaultColor text-white rounded-md transition-all px-4 py-2 ${margin} font-semibold hover:bg-black`} onClick={click}>
        {children}
      </button>
    );
}

export default Button;