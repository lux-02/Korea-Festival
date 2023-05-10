import festivalsData from '../festivals.json';
import '../styles/Card.css';

const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('.');
    const monthIndex = parseInt(month) - 1;
    const date = new Date(year, monthIndex, day);
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    const weekday = weekdays[date.getDay()];
    const monthName = months[monthIndex];
    return `${year}년 ${monthName} ${day}일 (${weekday})`;
};

const formatDuration = (dates) => {
    if (dates.length === 1) {
        return formatDate(dates[0]);
    } else {
        const startDate = new Date(dates[0]);
        const endDate = new Date(dates[dates.length - 1]);
        const startYear = startDate.getFullYear();
        const endYear = endDate.getFullYear();
        const startMonth = startDate.getMonth();
        const endMonth = endDate.getMonth();
        const startDay = startDate.getDate();
        const endDay = endDate.getDate();
        const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
        const weekday1 = weekdays[startDate.getDay()];
        const weekday2 = weekdays[endDate.getDay()];
        const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

        if (startYear === endYear && startMonth === endMonth) {
            return `${startYear}년 ${months[startMonth]} ${startDay}일(${weekday1}) ~ ${endDay}일(${weekday2})`;
        } else {
            const startMonthName = months[startMonth];
            const endMonthName = months[endMonth];
            return `${startYear}년 ${startMonthName} ${startDay}일(${weekday1}) ~ ${endMonthName} ${endDay}일(${weekday2})`;
        }
    }
};

function Card() {
    return (
        festivalsData.festivals.map((i) => {
            const durationText = formatDuration(i.date);
            console.log(durationText);
            return (
                <ul>
                    <li>
                        <img src={i.poster} alt={i.name} />
                        <div className="float-box">
                            <span>{i.region}</span>
                            <span>| {i.age}+</span>
                        </div>
                        <div className="title-box">
                            <p>{durationText}</p>
                            <p>{i.name}</p>
                        </div>
                    </li>
                </ul>
            );
        })
    )
}

export default Card;