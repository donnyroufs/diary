import styled from "styled-components";
import { sidebarWidth } from "./Sidebar";

export const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;

    @media screen and (min-width: 968px) {
        margin-left: ${sidebarWidth + 200}px;
        margin-right: 200px;
    }
`;

export const Main = styled.main`
    display: flex;
    flex-flow: column nowrap;
`;
