import axios from "axios";

export const quizSave = async (memberId, reportId) => {
    try {
        await axios.post(`http://localhost:8080/bookmark/save/${memberId}/${reportId}`, {
            memberId: memberId,
            reportId: reportId,
        })
    } catch (error) {
        console.log(error)
    }
}

export const getQuizExplain = async (memberId) => {
    try {
        const response = await axios.get(`http://localhost:8080/bookmark/search/${memberId}`)

        return response.data
    } catch (error) {
        console.log(error)
    }
}

