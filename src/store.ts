import todoStore from "./TodoStore";
import { createContext, useContext } from "react";


const store = {
    todoStore: todoStore(),
}

export const StoreContent = createContext(store)

export const useStore = () => {
    return useContext<typeof store>(StoreContent)
}
