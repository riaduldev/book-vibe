'use client'
import { createContext, ReactNode, useState } from "react";

export const BookContext = createContext({})

const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const sharedState = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }
    return <BookContext.Provider value={sharedState}>{children}</BookContext.Provider>
};

export default BooksProvider;