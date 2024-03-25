const jsonData = {
    "mealServiceDietInfo": [
      {
        "row": [
          {
            "MLSV_YMD": "20210104",
            "DDISH_NM": "수수밥s<br/>북어계란국s1.5.<br/>오복지무침R13.<br/>제육볶음R5.6.10.<br/>두부구이&양념장(다)2.5.6.10.12.<br/>배추김치@9."
          },
          {
            "MLSV_YMD": "20210105",
            "DDISH_NM": "햄야채볶음밥s1.2.5.6.10.<br/>수제햄버거R1.2.5.6.10.12.13.<br/>수제햄버거R<br/>고구마맛탕5.6.13.<br/>깍두기@9.<br/>야채샐러드  <br/>씨리얼*우유1.2.5.6.13."
          }
        ]
      }
    ]
  };
  
  // 날짜와 메뉴 항목 추출 및 정리
  const processedData = jsonData.mealServiceDietInfo.reduce((acc, info) => {
    info.row.forEach(row => {
      const date = row.MLSV_YMD;
      const menuItems = row.DDISH_NM.split('<br/>').filter(item => item.trim() !== '');
      // 날짜별로 메뉴 항목을 배열에 추가
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date] = [...acc[date], ...menuItems];
    });
    return acc;
  }, {});
  
  console.log(processedData);