import React, { useState, useEffect, useRef } from "react";
import * as Styles from "./styles/Modal";
import { Form, Button } from "./styles/Utilities";
import useOnclickOutside from "react-cool-onclickoutside";

const Modal = ({ createTodo, title, isOpen, setIsOpen }) => {
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
        createTodo(values);
    };

    const handleCloseModal = (e) => {
        console.log("close me");
        e.preventDefault();
        setIsOpen(false);
    };

    const handleOnChange = (e) =>
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });

    useEffect(() => setValues({ title: "", description: "" }), [isOpen]);

    return (
        <React.Fragment>
            <Styles.Modal.Overlay isOpen={isOpen} onClick={handleCloseModal} />
            <Styles.Modal isOpen={isOpen}>
                <Styles.Modal.Inner ref={ref}>
                    <Styles.Modal.Title>{title}</Styles.Modal.Title>
                    <Form.Group>
                        <Form.Label>add todo</Form.Label>
                        <Form.Input
                            name="title"
                            type="text"
                            placeholder="enter todo"
                            value={values.title}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group text>
                        <Form.Label>Description</Form.Label>
                        <Form.TextArea
                            name="description"
                            type="text"
                            placeholder="enter description"
                            value={values.description}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Button primary onClick={handleAddTodo}>
                        Add Todo
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

{
    /* <Styles.Modal isOpen={isOpen}>
     <Styles.Modal.Overlay isOpen={isOpen} onClick={handleCloseModal} />
     <Styles.Modal.Inner>
         <Styles.Modal.Title>{title}</Styles.Modal.Title>
         <Styles.Modal.Form>
            <Form.Group>
                <Form.Label>add todo</Form.Label>
                <Form.Input
                    name="title"
                    type="text"
                    placeholder="enter todo"
                    value={values.title}
                    onChange={handleOnChange}
                />
            </Form.Group>
            <Form.Group text>
                <Form.Label>Description</Form.Label>
                <Form.TextArea
                    name="description"
                    type="text"
                    placeholder="enter description"
                    value={values.description}
                    onChange={handleOnChange}
                />
          </Form.Group> 
         </Styles.Modal.Form>
     </Styles.Modal.Inner>
 </Styles.Modal> */
}
