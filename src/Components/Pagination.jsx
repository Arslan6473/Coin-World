import React from "react";
import { Link } from "react-scroll";

function Pagination({ totalcoins, coinPerPage, setCurrentPage, currentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalcoins / coinPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="flex justify-center items-center  text-black gap-4 h-[20vh] font-bold">
        {pages.map((page) => (
          <Link
            to="section2"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button
            key={page}
              onClick={() => setCurrentPage(page)}
              className={`${
                page === currentPage ? "bg-[#b860f270]" : " "
              } md:px-5 md:py-3 px-3 py-1  rounded border text-white  cursor-pointer transition duration-300`}
            >
              {page}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Pagination;
