import styled from "styled-components";

export const Todos = styled.ul`
    list-style: none;
    margin: 0 0 1rem 0;
    padding: 0;
    width: 100%;
`;

Todos.Todo = styled.li`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 80px;
    padding: 0.5rem 1rem;
    background: ${({ theme, active }) => (active ? theme.darkBlue : theme.white)};
    border: ${({ theme, active }) => (active ? "none" : `1px solid ${theme.gray}`)};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-weight: 500;
    color: ${({ theme }) => theme.todoColour};
`;

Todos.Header = styled.header`
    color: ${({ theme }) => theme.black};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: ${({ theme, active }) => (active ? theme.lightBlue : theme.blue)};
    font-weight: bold;
`;

export const Description = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    margin-top: 2rem;

    @media screen and (min-width: 968px) {
        margin-top: 0;
        border: ${({ theme }) => `1px solid ${theme.gray}`};
        padding: 1rem;
        border-radius: ${({ theme }) => theme.borderRadius};
    }
`;

Description.Icons = styled.aside``;

Description.Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0;

    @media screen and (min-width: 968px) {
        padding-top: 0;
        padding-bottom: 0;
    }
`;

Description.Title = styled.h3`
    font-size: 0.95rem;
    font-weight: bold;
    color: ${({ theme }) => theme.blue};

    @media screen and (min-width: 968px) {
        margin-top: 0;
    }
`;

Description.Body = styled.textarea`
    border: 0;
    outline: none;
    resize: none;
`;