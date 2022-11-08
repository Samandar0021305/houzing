import {createContext, useReducer } from "react";
import {reducer} from './reducer'
 const PropertiesContext = createContext()

const PropertiesProvider = ({Children})=>{
    const [state,dispatch] = useReducer(reducer,[])
    return <PropertiesContext.Provider value={[state,dispatch]}>{Children}</PropertiesContext.Provider>
}

export default PropertiesProvider ;