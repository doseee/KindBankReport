import axios from "axios";

const articleDataApi = async (date) => {
    console.log(date)
    try {
        const resource = await axios.get('http://localhost:8080/report/search/'+date);

        console.log(resource)

        return resource.data

    } catch(error) {
        console.log("기사 조회 실패: "+error);
    }
}

export default articleDataApi;