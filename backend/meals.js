const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// 나이스 OpenAPI 엔드포인트 URL
const apiUrl = 'https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=T10&SD_SCHUL_CODE=9290083';

// 라우트 정의
app.get('/', async (req, res) => {
    try {
        // API 요청 보내기
        const response = await axios.get(apiUrl, {
            // 쿼리 파라미터 추가
            params: {
                key: "ce5afd532eee47569c372410bcba8b6b",
                Type: "json",
                plindex: 100,
                pSize: 100,
                ATPT_OFCDC_SC_CODE: "B10",
                SD_SCHUL_CODE: "7010738",
                MMEAL_SC_CODE: "1" // JSON 형식으로 반환하려면 문자열로 표기
            }
        });

        const mealData = response.data;

        // 데이터 가공: 날짜별로 메뉴 항목 추출
        const processedData = {};
        mealData.forEach(info => {
            const date = info.row.MLSV_YMD;
            const menuItems = info.row.DDISH_NM.split('<br/>').filter(item => item.trim() !== '');
            // 날짜별로 메뉴 항목을 배열에 추가
            if (!processedData[date]) {
                processedData[date] = [];
            }
            processedData[date].push(...menuItems);
        });

        // 클라이언트에게 응답
        res.json(processedData);

    } catch (error) {
        // 오류 처리
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
