import { Children, createContext } from "react";

const Root = createContext()

const RootContext = ()=>{
    return <Root.Provider>{Children}</Root.Provider>
}

export default RootContext ;