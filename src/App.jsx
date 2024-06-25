import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/Register";
import ForgetPassword from "./Pages/ForgetPassword";
import HomePage from "./Pages/HomePage";
import NoPageFound from "./Pages/NoPageFound";
import AppLayout from "./Pages/AppLayout";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import { Suspense } from "react";
import Loading from "./ui/Loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

function App() {
  return (

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgotPassword" element={<ForgetPassword />} />
              <Route path="*" element={<NoPageFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  
  );
}

export default App;
