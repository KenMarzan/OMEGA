import { useState, useReducer} from "react"; 


function Navbar() {

    const initialState = { activeLink: "home" };

    function reducer(state: typeof initialState, action: { type: string; payload?: string }) {
        switch (action.type) {
            case "SET_ACTIVE_LINK":
                return { ...state, activeLink: action.payload || "home" };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <nav>

        </nav>
    );
}