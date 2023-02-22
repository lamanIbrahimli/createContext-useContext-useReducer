import React, { createContext, useContext, useReducer } from "react";

const store = createContext();

export const StoreProvider = ({ children, initialState, reducer }) => {
    const value = useReducer(reducer, initialState);
    return <store.Provider value={value}>{children}</store.Provider>;
};

export function useStore() {
    return useContext(store);
}
