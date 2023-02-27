import randomNumber from "./randomNumber";

export function FrprTask1() {
    const name = "Айтигеник";
    const placeOfWork = "Айтигенио";

    return (
        <div>
            <p>Привет! Меня зовут {name}</p>
            <p>Я работаю в {placeOfWork}</p>
            <p>Давай порешаем задачи!</p>
        </div>
    );
}
export function FrprTask2() {
    const a = 5;
    const b = 10;

    return (
        <div>
            <h1>Прямоугольник</h1>
            <p>Стороны Прямоугольника: {a} и {b}</p>
            <p>Площадь: {a * b}</p>
            <p>Периметр: {2 * (a + b)}</p>
        </div>
    );
}
export function FrprTask3() {
    const num1 = 3;
    const num2 = 5;

    return (
        <>
            <p>{num1}<sup>{num2}</sup> * 5 = {num1 ** num2 * 5}</p>
        </>
    );
}
export function FrprTask4() {
    return (
        <>
            <p>Ваше случайное число: {randomNumber(1, 10)}</p>
        </>
    );
}
export function FrprTask5() {
    const tipsOfDay = ['Хорошо поешь', 'Отдохни', 'Вовремя ложись спать'];

    console.log(tipsOfDay.length)

    return (
        <>
            <h1>Совет дня</h1>
            <p>{tipsOfDay[randomNumber(0, tipsOfDay.length - 1)]}</p>
        </>
    );
}
export function FrprTask6() {
    const subject = {
        name: "Роман",
        age: 15,
        hobby: "Программирование"
    };

    return (
        <>
            <h1>Об авторе</h1>
            <ul>
                <li><b>Имя: </b>{subject.name}</li>
                <li><b>Возраст:</b>{subject.age}</li>
                <li><b>Увлечение: </b>{subject.hobby}</li>
            </ul>
        </>
    );
}