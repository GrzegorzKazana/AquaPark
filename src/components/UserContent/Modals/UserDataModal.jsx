import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button, Input } from "antd";
import styles from "./UserDataModal.module.scss";

const UserDataModal = ({ open, handleClose }) => {
    const footer = (
        <Button type="primary" onClick={handleClose}>
            Ok
    </Button>
    );

    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('password');
    const [name, setName] = useState('name');
    const [surname, setSurname] = useState('surname');
    const [editable, setEditable] = useState(false);


    const makeEditable = () => {
        setEditable(true);
    };
    const confirmEdit = () => {
        setEditable(false);
    };

    const handleChangeEmail = event => {
        if (editable) {
            setEmail(event.target.value)
        }
    };
    const handleChangeName = event => { if (editable) { setName(event.target.value) } };
    const handleChangeSurname = event => { if (editable) { setSurname(event.target.value) } };
    const handleChangePassword = event => { if (editable) { setPassword(event.target.value) } };

    return (
        <Modal title="Edit User Data" visible={open} onOk={handleClose} footer={footer}>
            <Button onClick={makeEditable}>Edit</Button>
            <div className={styles.inputField}>
                <Input name="email" value={email} onChange={handleChangeEmail} />
            </div>
            <div className={styles.inputField}>
                <Input name="name" value={name} onChange={handleChangeName} />
            </div>
            <div className={styles.inputField}>
                <Input name="surname" value={surname} onChange={handleChangeSurname} />
            </div>
            <div className={styles.inputField}>
                <Input name="password" value={password} onChange={handleChangePassword} />
            </div>
            <Button onClick={confirmEdit}>Confirm</Button>
        </Modal>
    );
};
export default UserDataModal;

UserDataModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    // email: PropTypes,
    // password: PropTypes,
    // name: PropTypes,
    // surname: PropTypes,
};
