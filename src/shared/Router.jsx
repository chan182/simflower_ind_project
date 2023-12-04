import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import auth from "../redux/modules/authSlice";
import { useSelector } from "react-redux";
export default function Router() {
    const auth = useSelector((state) => state.auth.accessToken);
    useEffect(() => {
        if (auth == null) {
            <Navigate to="/login"></Navigate>;
        }
    }, []);
    console.log(auth);
    return (
        <BrowserRouter>
            <Routes>
                {auth == null ? (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="*"
                            element={<Navigate replace to="/login" />}
                        />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                        <Route path="/register" element={<Register />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}
