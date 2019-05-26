import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button, Input } from "antd";

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

    const handleChangeEmail = event => setEmail(event.target.value);
    const handleChangeName = event => setName(event.target.value);
    const handleChangeSurname = event => setSurname(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);

    return (
        <Modal title="Edit User Data" visible={open} onOk={handleClose} footer={footer}>
            <form>
                <div style={{ padding: "10px" }}>
                    <Input name="email" value={email} onChange={handleChangeEmail} />
                </div>
                <div style={{ padding: "10px" }}>
                    <Input name="name" value={name} onChange={handleChangeName} />
                </div>
                <div style={{ padding: "10px" }}>
                    <Input name="surname" value={surname} onChange={handleChangeSurname} />
                </div>
                <div style={{ padding: "10px" }}>
                    <Input name="password" value={password} onChange={handleChangePassword} />
                </div>
            </form>
        </Modal>
    );
};
export default UserDataModal;

UserDataModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    email: PropTypes,
    password: PropTypes,
    name: PropTypes,
    surname: PropTypes,
};
