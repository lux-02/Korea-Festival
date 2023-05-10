import festivalsData from '../festivals.json';

const formatDate = (dataString) => {
    const [year, month, day] = dataString.split('.');
    const monthIndex = parseInt(month) - 1;
    const date = new Date(year, monthIndex, day);
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    const weekday = weekdays[date.getDay()];
    const month2 = months[monthIndex];
    const day2 = date.getDate();
    return `${year}년 ${month2} ${day2}일 (${weekday})`;
}


const formatDuration = (dates) => {
    if (dates.length === 1) {
        return formatDate(dates[0]);
    } else {
        const startDate = new Date(dates[0]);
        const endDate = new Date(dates[dates.length - 1]);
        const startDateText = formatDate(dates[0]);
        const endDateText = formatDate(dates[dates.length - 1]);

        if (startDate.getDay() === endDate.getDay()) {
            return `${startDateText} ~ ${endDateText.split(' ')[1]}`
        } else {
            return `${startDateText} ~ ${endDateText}`
        }
    }
}

function App() {
    return (
        festivalsData.festivals.map((i) => {
            const durationText = formatDuration(i.date);
            console.log(durationText);
            return (
                <ul>
                    <li>
                        <img src={i.poster} alt={i.name} />
                        <p>{durationText}</p>
                        <p>{i.age}+</p>
                        <p>{i.name}</p>
                        <p>{i.region}</p>
                    </li>
                </ul>
            )
        })
    )
}

export default App;