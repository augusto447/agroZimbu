import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { queryClient } from "./lib/react-query";


export function App() {


  return (
    <ThemeProvider storageKey="angozimbu" defaultTheme="light">
      <Toaster richColors />
      <QueryClientProvider client={queryClient} >
        <RouterProvider router={router} />

      </QueryClientProvider>
    </ThemeProvider>
  )
}


