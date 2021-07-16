import { createContext } from "react";

export const FirebaseContext = createContext(null);

// export const FirebaseProvider = ({ reducer, initialState, children }) => (
//     <FirebaseContext.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </FirebaseContext.Provider>
// )

// // Creating the Hook

// export const useFirebaseValue = () => useContext(FirebaseContext);
