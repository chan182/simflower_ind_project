import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../axios/api";
const Register = () => {
    const [informs, setInforms] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const navigate = useNavigate();

    // 회원가입 진행시 공란인 경우 alert가 나온다.
    // const signUp = (e) => {
    //     e.preventDefault();
    //     if (email === "") {
    //         return alert("이메일을 입력해주세요");
    //     }
    //     if (password === "") {
    //         return alert("비밀번호를 입력해주세요");
    //     }
    //     if (nickname === "") {
    //         return alert("닉네임을 입력해주세요");
    //     }
    // };
    // // 조회 함수
    // const fetchTodos = async () => {
    //     // const { data } = await axios.get("http://localhost:4000/todos");
    //     const { data } = await api.get("/registerinfo");
    //     setInforms(data);
    // };

    // 추가 함수
    const onSubmitHandler = async () => {
        console.log({ id: email, password: password, nickname: nickname });
        await api.post("/register", {
            id: email,
            password: password,
            nickname: nickname,
        });

        // setTodos([...todos, inputValue]);
        // fetchTodos();
        // navigate("/");
    };

    return (
        <RegisterContainer>
            {/* <Title /> */}
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitHandler();
                }}
            >
                <InputWrapper>
                    <label>아이디</label>
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="아이디(4~10글자)"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>비밀번호</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="비밀번호 (4 ~ 15글자)"
                        value={password}
                        name="password"
                        required
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>닉네임</label>
                    <input
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="닉네임(1~10글자)"
                        type="text"
                    />
                </InputWrapper>
                <BtnWrapper>
                    <button
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        뒤로가기
                    </button>
                    <button>회원가입</button>
                </BtnWrapper>
            </Form>
        </RegisterContainer>
    );
};

export default Register;

const RegisterContainer = styled.div`
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
        margin: 5px;
        background-color: white;
        border: lightgrey 1px solid;
        color: black;
        font-size: 16px;
        padding: 6px 12px;
        cursor: pointer;
        &:hover {
            background-color: #fff9c0;
            color: black;
            border: none;
            border-radius: 10px;
        }
    }
`;
