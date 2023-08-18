import axios from "axios";

const loginApi = async (email, pw) => {

    console.log(email)

    try {
        const response = await axios.post(`http://localhost:8080/member/signin`, {
            memberId: email,
            password: pw,
        });

        return response.data;
    } catch(error) {
        console.error('로그인 실패: ', error)
    }
}

export default loginApi;