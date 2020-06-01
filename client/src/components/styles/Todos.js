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
    font-weight: bold;
    color: ${({ theme }) => theme.darkGray};
`;

Todos.Header = styled.header`
    color: ${({ theme }) => theme.black};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
`;

export const Description = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    margin-top: 2rem;
`;

Description.Icons = styled.aside``;

Description.Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
`;

Description.Title = styled.h3`
    font-size: 0.95rem;
    font-weight: bold;
    color: ${({ theme }) => theme.darkBlue};
`;

Description.Body = styled.textarea`
    border: 0;
    outline: none;
    resize: none;
`;
