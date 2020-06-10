import React, { useState, useEffect, useRef } from "react";
import * as Styles from "../styles/Modal";
import { Form, Button } from "../styles/Utilities";
import useOnclickOutside from "react-cool-onclickoutside";

const Modal = ({
    action,
    isOpen,
    setIsOpen,
    title,
    labelOne,
    placeholderOne = "add todo",
    placeholderTwo = "enter description",
    btnText,
    valueOne = "",
    valueTwo = "",
}) => {
    const ref = useRef();

    const [values, setValues] = useState({
        title: "",
        description: "",
    });

    useOnclickOutside(ref, () => {
        setIsOpen(false);
    });

    const handleAddTodo = (e) => {
        e.preventDefault();
        setIsOpen(false);
        action(values);
    };

    const handleCloseModal = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    const handleOnChange = (e) =>
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });

    useEffect(() => setValues({ title: valueOne, description: valueTwo }), [isOpen]);

    return (
        <React.Fragment>
            <Styles.Modal.Overlay isOpen={isOpen} onClick={handleCloseModal} />
            <Styles.Modal isOpen={isOpen}>
                <Styles.Modal.Inner ref={ref}>
                    <Styles.Modal.Title>{title}</Styles.Modal.Title>
                    <Form.Group onSubmit={handleAddTodo}>
                        <Form.Label>{labelOne}</Form.Label>
                        <Form.Input
                            name="title"
                            type="text"
                            placeholder={placeholderOne}
                            value={values.title}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group text>
                        <Form.Label>Description</Form.Label>
                        <Form.TextArea
                            name="description"
                            type="text"
                            placeholder={placeholderTwo}
                            value={values.description}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Button primary onClick={handleAddTodo}>
                        {btnText}
                    </Button>
                    <Button secondary onClick={handleCloseModal}>
                        Cancel
                    </Button>
                </Styles.Modal.Inner>
            </Styles.Modal>
        </React.Fragment>
    );
};
export default Modal;
