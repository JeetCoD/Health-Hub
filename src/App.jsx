import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/Register";
import ForgetPassword from "./Pages/ForgetPassword";
import HomePage from "./Pages/HomePage";
import NoPageFound from "./Pages/NoPageFound";
import AppLayout from "./Pages/AppLayout";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import HospitalPage from "./Pages/HospitalPage";
import ProfilePage from "./Pages/ProfilePage";
import Account from "./Pages/Account";
import Report from "./Pages/Report";
import DoctorSide from "./Pages/DoctorSide";
import ProfileLayout from "./Pages/ProfileLayout";
import { Toaster } from "react-hot-toast";

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
            <Route path="app" element={<HomePage />} />
            <Route path="app/:hospital" element={<HospitalPage />} />
            <Route path="sign-in" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="forgotPassword" element={<ForgetPassword />} />
            <Route path="profile" element={<ProfileLayout />}>
              <Route path="account" element={<Account />} />
              <Route path="report" element={<Report />} />
              <Route path="userProfile" element={<ProfilePage />} />
              <Route index element={<Navigate replace to="report" />} />
            </Route>
            <Route path="*" element={<NoPageFound />} />
            <Route path="/hospitalAppt" element={<DoctorSide />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            padding: "16px 24px",
            maxWidth: "500px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
