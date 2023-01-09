import React from "react";

function Navbar() {
  return (
    <div className=" h-16 flex flex-row justify-between p-2 w-full border-b border-[#858585]">
      {/* logo */}
      <div className="logotab flex flex-row items-center pl-14 ">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo"
          className="logo w-9 mr-2"
        />
        <p className="logoname justify-center text-2xl">Keep</p>
      </div>
      {/* search */}
      <div className="searchtab flex flex-row items-center w-6/12 mx-3">
        <form
          action=""
          className="searchform flex flex-row items-center w-full px-3 bg-[#585858] rounded-lg"
        >
          <button className="search px-1 flex flex-row items-center">
            <svg
              focusable="false"
              height="24px"
              className=" h-12 w-12 p-3"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
              <path d="M0,0h24v24H0V0z" fill="none"></path>
            </svg>
          </button>
          <input
            className="h-12 w-full placeholder:text-[#ffffff] bg-transparent"
            type="search"
            placeholder="search"
          />
        </form>
      </div>
      {/* profile */}
      <div className="profile w-12">
        <img
        className=" object-fill p-1 rounded-full right-0"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
