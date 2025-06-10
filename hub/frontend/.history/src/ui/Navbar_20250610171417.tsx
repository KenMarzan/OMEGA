export default function Navbar(){
return (
    <nav className="flex justify-between items-center p-4 navbar">
    <div className="logo">
      <h1 className="text-xl font-bold">Website Logo</h1>
    </div>
    <div className="clickables flex gap-4">
      <button className="button">Customer Page</button>
      <button className="button">Vendor Page</button>
      <button className="button">Farmer Page</button>
      <button className="button">About Us</button>
    </div>

  </nav>
);
}

function dropdown(){
    return(<div className="dropdown-options flex gap-4">
      <button className="button">Category</button>
      <button className="button">Sign In</button>
      <button className="button">Help</button>
    </div>);
}

function searchbar(){
    return(
        <div className="searchbar">
            <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded border"
            />
      </div>
    );
}