import { Context, createContext } from "react";
import { GitHubUser, UserDataStates } from "../../utils/types";

const SearchContext = createContext<UserDataStates | null>(null);

export default SearchContext;
