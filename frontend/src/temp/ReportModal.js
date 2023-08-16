import React from 'react';
import * as styles from "../style/Styles"

function ReportModal ({ setModalOpen, id, title, content, date }: PropsType) {
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <styles.ModalContainer>
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </styles.ModalContainer>
    )
}

export default ReportModal;
