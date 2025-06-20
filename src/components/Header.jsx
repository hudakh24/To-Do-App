const Header = () => {
  return (
    <header className="header-main flex justify-between items-center bg-white border-b border-gray-200 mx-4 p-2">
      {/* Header Left Side */}
      <div className="flex items-center gap-3">
        <div className="size-5 -mt-5 -ml-5 border rounded-full flex items-center justify-center">
          <img
            src="/icons/arrowLeft.svg"
            alt="Back"
            className="size-3 flex items-center justify-center"
          />
        </div>
        <h1 className="header-text text-3xl font-medium">Website Design</h1>
      </div>

      {/* Header Right Side */}
      <div className="flex items-center justify-between gap-4 mr-5">
        {/* Search Box */}
        <div className="flex items-center bg-gray-100 rounded-full px-2 py-2 w-60 gap-2">
          <img
            src="/icons/search.svg"
            alt="Search"
            className="size-5 opacity-30 ml-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none text-gray-500 placeholder-gray-300 text-sm w-full bg-transparent"
          />
        </div>

        {/* Notification & Message Icons */}
        <div className="flex items-center bg-gray-100 rounded-full px-2 py-2 gap-2">
          <img src="/icons/bell.svg" alt="Notifications" className="size-4" />
          <img src="/icons/message.svg" alt="Messages" className="size-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
