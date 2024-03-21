"use client";

import { clientSessionToken } from "@/lib/http";
import { createContext, useContext, useLayoutEffect, useState } from "react";

// const AppContext = createContext({
//   // sessionToken: "",
//   // setSessionToken: (sessionToken: string) => {},
// });

// export const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error("useAppContext must be used within an AppProvider");
//   }
//   return context;
// };

export default function AppProvider({
  children,
  initialSessionToken = "",
}: {
  children: React.ReactNode;
  initialSessionToken?: string;
}) {
  useState(() => {
    if (typeof window !== "undefined") {
      clientSessionToken.value = initialSessionToken;
    }
  });
  // const [sessionToken, setSessionToken] = useState(initialSessionToken);
  // useLayoutEffect(() => {
  //   sessionToken.value = initialSessionToken;
  // }, [initialSessionToken]);
  return (
    <>{children}</>
    // <AppContext.Provider

    // value={{ sessionToken, setSessionToken }

    // }>
    //   {children}
    // </AppContext.Provider>
  );
}
