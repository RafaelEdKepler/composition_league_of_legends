import { createContext, ReactNode, useState } from 'react';

interface SelectContextData {

}

interface SelectContextProps {
    children: ReactNode
}

export const SelectContext = createContext({} as SelectContextData);

export function SelectContextProvider({
    children
}: SelectContextProps) {
    const [isSelecting, setIsSelecting] = useState([
        false, false, false, false, false, false, false, false, false
    ]);

}
