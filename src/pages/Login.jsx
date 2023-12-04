import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../axios/api";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "redux/modules/authSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onSubmitHandler = () => {};
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    console.log(auth);
    // 이메일 또는 비밀번호 공란 시 알러트창이 나온다.
    // [1130]아래를 간소화시키는 방법?
    // [1130]try catch ?
    // const signIn = async (event) => {
    //     event.preventDefault();
    //     if (email === "") {
    //         return alert("이메일을 입력해주세요");
    //     }
    //     if (password === "") {
    //         return alert("비밀번호를 입력해주세요");
    //     }
    // };

    useEffect(() => {
        dispatch(setLogin(window.localStorage.getItem("accessToken")));
    }, []);
    // 추가 함수
    const onSubmitLoginHandler = async () => {
        console.log({ id: email, password: password });
        try {
            const { data } = await api.post("/login", {
                id: email,
                password: password,
            });
            window.localStorage.setItem("accessToken", data.accessToken);
            dispatch(setLogin(data.accessToken));
            console.log(data);
        } catch (err) {
            return alert("아이디 및 비밀번호를 확인해주세요");
        }
        // console.log(res);
        // setTodos([...todos, inputValue]);
        // fetchTodos();
        //// [1201 질문] 여기에서 토큰값을 가져와서 저장시키면 될까요?

        // dispatch = navigate("/");
    };
    return (
        <div>
            <LoginContainer>
                {/* <Title /> */}
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmitLoginHandler();
                    }}
                >
                    <InputWrapper>
                        <label>이메일</label>
                        <input
                            type="email"
                            value={email}
                            name="email"
                            placeholder="아이디를 입력해주세요"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label>비밀번호</label>
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                        />
                    </InputWrapper>
                    <BtnWrapper>
                        <button>로그인</button>
                        <button
                            onClick={() => {
                                navigate("/register");
                            }}
                            text="회원가입"
                        >
                            회원가입
                        </button>
                    </BtnWrapper>
                </Form>
            </LoginContainer>
        </div>
    );
};

export default Login;

const LoginContainer = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5rem;
`;
const Form = styled.form`
    background-color: whitesmoke;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 500px;
    border-radius: 12px;
    margin: 20px 0;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & label {
        width: 80px;
    }
    & input,
    textarea {
        width: 100%;
        padding: 12px;
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & button {
        background-color: white;
        border: lightgrey solid 1px;
        border-radius: 3px;
        color: black;
        font-size: 16px;
        padding: 6px 12px;
        margin: 5px;
        cursor: pointer;
        &:hover {
            background-color: #fff9c0;
            color: black;
            border: none;
            border-radius: 10px;
        }
    }
`;
