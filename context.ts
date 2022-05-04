import { Context, createContext } from "react";
import { GitHubUser, UserDataStates } from "./types";

export const SearchContext = createContext<UserDataStates | null>(null);
