import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='p-4'>
      <Link to={"/"}>
        <img
          src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
          style={{ maxWidth: "150px" }}
        />
      </Link>
    </div>
  );
};

export default Header;
