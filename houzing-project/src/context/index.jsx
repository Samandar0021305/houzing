import { createContext } from "react";
import PropertiesProvider from "./properties";

const Root = createContext()

const RootContext = ({Children})=>{
    return <Root.Provider>
         <PropertiesProvider>
            {Children}
         </PropertiesProvider>
        </Root.Provider>
}

export default RootContext ;