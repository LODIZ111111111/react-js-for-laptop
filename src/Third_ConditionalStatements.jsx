import randomNumber from "./randomNumber";

export function ThprTask1() {
    const age = randomNumber(1, 100);
    const isAdmin = randomNumber(1, 2) == 1 ? true : false;
    console.log(isAdmin)

    return (<>
        <p>Возраст: {age}</p>
        <p>{age >= 18 ? "Добро пожаловать!" : "Доступ запрщён! Вам нет 18-ти лет!"}</p>
        <p>{age >= 18 ? (isAdmin == true ? "Вы вошли как администратор" : "Вы вошли как гость") : ""}</p>
    </>);
}
export function ThprTask2() {
    const now = new Date();
    const hours = now.getHours();

    return (
        <div>
            
        </div>
    );
}
export function ThprTask3() {


    return (
        <>

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