import randomNumber from "./randomNumber";

const age = randomNumber(1, 100);
const isAdmin = randomNumber(1, 2) === 1 ? true : false;

export function ThprTask1() {
    return (<>
        <p>Возраст: {age}</p>
        <p>{age >= 18 ? "Добро пожаловать!" : "Доступ запрщён! Вам нет 18-ти лет!"}</p>
        <p>{age >= 18 ? (isAdmin === true ? "Вы вошли как администратор" : "Вы вошли как гость") : ""}</p>
    </>);
}
export function ThprTask2() {
    const hours = new Date().getHours();

    return (
        <p>
            {
                hours >= 6 && hours <= 12 ? "Доброе утро!" :
                    hours > 12 && hours < 17 ? "Добрый день!" :
                        hours >= 17 && hours <= 22 ? "Добрый вечер!" : "Доброй ночи."
            }
        </p>
    );
}
export function ThprTask3() {
    const hours = new Date().getHours();
    const link = "https://itgen.io";
    const ad = <>
        <p><a href={link}>Айтигенио</a></p>
        <p>Научим вашего ребёнка программировать!</p>
    </>

    return (
        <>
            {age > 18 ?
                !isAdmin ?
                    !((hours > 22 && hours <= 24) || (hours >= 0 && hours < 6)) ? ad : ""
                : ""
            : ""    
            }
        </>
    );
}
export function ThprTask4() {


    return (
        <>

        </>
    );
}
export function ThprTask5() {


    return (
        <>

        </>
    );
}