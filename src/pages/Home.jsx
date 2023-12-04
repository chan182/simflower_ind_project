import AddForm from "components/AddForm";
import Header from "components/Header";
import LetterList from "components/LetterList";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Layout from "components/common/Layout";

export default function Home() {
    // 유저 정보를 담는 변수를 선언한다.
    // 로컬스토리지에 값이 있는지 없는지 확인한다.
    // if를 통해 return 할지말지
    // const [user, setUser] = useState(false);

    // const navigator = useNavigate();
    return (
        <Container>
            <Layout />
            <Header />
            <AddForm />
            <LetterList />
        </Container>
    );

    // if (user === false) {
    //     return;
    // } else {
    //     return (

    //     );
    // }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
