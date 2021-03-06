import styled from "styled-components";

export const Tabs = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;

    @media screen and (min-width: 968px) {
        justify-content: flex-end;
    }
`;

Tabs.Tab = styled.button`
    background-color: ${({ theme, active }) => (active ? theme.secondaryBlue : theme.white)};
    color: ${({ theme, active }) => (active ? theme.white : theme.darkBlue)};
    border: 0;
    outline: none;
    padding: 0.8rem 1.2rem;
    min-width: 160px;
    border-radius: 5px;
    width: 48%;
    transition: 0.1s ease-in-out all;
    &:hover {
        cursor: pointer;
    }
    @media screen and (min-width: 968px) {
        margin-left: 1rem;
        width: auto;
    }
`;
