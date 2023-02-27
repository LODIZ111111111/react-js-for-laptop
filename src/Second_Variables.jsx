import "./css/secondPractice.css";

export function ScprTask1() {
    const items = [<li>text1</li>, <li>text2</li>, <li>text3</li>]

    return (
        <>
            <ul>
                {items}
            </ul>
        </>
    );
}

export function ScprTask4() {
    const link = "https://lod1z.ru";

    const titleClass = "title";
    const subtitleClass = "subtitle";
    const textClass = "text";
    const listClass = "list";

    const li1 = <li>Яблоки - 500-600 г</li>;
    const li2 = <li>Сахар - 160 г</li>;
    const li3 = <li>Мука пшеничная - 160 г</li>;
    const li4 = <li>Яйца - 4 шт</li>;

    const lis = [li1, li2, li3, li4];

    return (
        <>
            <div>
                <h1 className={titleClass}>Рецепты</h1>
                <h2 className={subtitleClass}>Шарлотка</h2>
                <p className={textClass}>Нам понадобиться:</p>
                <ul className={listClass}>
                    {lis}
                </ul>
                <a href={link}>Ссылка на источник</a>
            </div>
        </>
    );
}