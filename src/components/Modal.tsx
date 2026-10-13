import React from 'react'

// CSS
import styles from './Modal.module.css'

interface Props {
    title: string
    children: React.ReactNode;
    onClose: () => void;
}

const Modal = ({ title, children, onClose }: Props) => {
    return (
        <div id="modal">
            <div className={styles.fade} />
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-label={title}
            >
                <button type="button" onClick={onClose} aria-label="Fechar modal">×</button>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal