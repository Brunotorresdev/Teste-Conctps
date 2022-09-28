import { createContext, useState } from "react";

export const ListRepositories = createContext({});

export const ListProvider = ({ children }: any) => {
    const [listRepos, setListRepos] = useState<any>([]);
    const [infosOwner, setInfosOwner] = useState<any>({});

    return (
        <ListRepositories.Provider
            value={{
                listRepos,
                setListRepos,
                infosOwner,
                setInfosOwner,
            }}
        >
            {children}
        </ListRepositories.Provider>
    );
};
