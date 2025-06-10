import React, { useReducer } from 'react';

function Searchbar() {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded border"
      />
    </div>
  );
}

function Dropdown({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="dropdown-options flex gap-4">
      <button className="button">Category</button>
      <button className="button">Sign In</button>
      <button className="button">Help</button>
    </div>
  );
}

// Reducer logic
type State = { dropdownVisible: boolean };
type Action = { type: 'TOGGLE_DROPDOWN' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return { ...state, dropdownVisible: !state.dropdownVisible };
    default:
      return state;
  }
}

export default function Navbar() {
  const [state, dispatch] = useReducer(reducer, { dropdownVisible: false });

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

      <Searchbar />
      <Dropdown visible={state.dropdownVisible} />
    </nav>
  );
}
