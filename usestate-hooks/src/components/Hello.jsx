import { useState, useEffect } from "react";
import "./Hello.css";

function Hello() {
    const [month, setMonthValue] = useState("");
    const [date, setDateValue] = useState("");
    const [hours, setHoursValue] = useState("");
    const [seconds, setSecondsValue] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const newDate = new Date();
            setMonthValue(newDate.toLocaleString("en-US", { month: "long" }));
            setDateValue(newDate.getDate().toLocaleString());
            setHoursValue(newDate.getHours().toLocaleString());
            setSecondsValue(newDate.getSeconds().toLocaleString());
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div className="card">
                <h1 className="month">{month}</h1>
                <h1 className="date">Date: {date}</h1>
                <h1 className="hours">Hours: {hours}</h1>
                <h1 className="seconds">Seconds: {seconds}</h1>
            </div>
        </div>
    );
}

export default Hello;