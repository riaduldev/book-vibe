'use client'
import { IBook } from "@/types/books.types";
import { createContext, ReactNode, useState } from "react";

interface IBookContext {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishlist: IBook[];
    setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BookContext = createContext<IBookContext>({
    readBooks: [],
    setReadBooks: () => { },
    wishlist: [],
    setWishlist: () => { }
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishlist, setWishlist] = useState<IBook[]>([]);
    const sharedState = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }
    return <BookContext.Provider value={sharedState}>{children}</BookContext.Provider>
};

export default BooksProvider;