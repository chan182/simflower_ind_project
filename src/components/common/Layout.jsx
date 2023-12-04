import React from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "redux/modules/authSlice";
import styled from "styled-components";

const Layout = () => {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(setLogin(null));
        window.localStorage.removeItem("accessToken");
    };

    return (
        <Stdiv>
            <button onClick={onClickHandler}>로그아웃</button>
        </Stdiv>
    );
};

export default Layout;

const Stdiv = styled.div`
    background-color: lightpink;
    width: 100%;
    height: 30px;
`;
