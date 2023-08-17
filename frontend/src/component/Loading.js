import React from 'react';
import Spinner from "../assets/spinner.gif";

export default function Loading() {
    return <div>
        <img src={Spinner} alt="로딩 중" width="30%" />
    </div>
}