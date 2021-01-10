import React, { useRef, useState } from 'react';
//클릭시 => 함수 컴포넌트 전체가 다시 실행된다.
const Test5 = () => {
    const no = useRef(1); // 고유 번호 선언
    const [data, setData] = useState([])
    
    console.log('전체영역');
    
    const handleAdd = () => {
        console.log('handleAdd');
        // , 기준으로 배열로 변환 - js

        const names = '홍길동,강호동,배민혁,이승철,엄정화,이효리,권오재,아이폰,잡스,구라청,송파구,서울시,코로나,테이텀,르브론,갈매기,서브룩,하든,메이플스토리,리니지,리그오브,레전드,서든어택,월드오브,워,크래프트'.split(',');
        setData([
            ...data,
            {
                id : no.current++,
                text : names[Math.floor(Math.random() * names.length)]
            }
        ])
    }
    return (
        <div>
            <button onClick={handleAdd}>데이터 추가 </button>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test5;