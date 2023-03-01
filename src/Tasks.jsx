import './App.css';
import { FrprTask1, FrprTask2, FrprTask3, FrprTask4, FrprTask5, FrprTask6 } from './FirstPractice';
import { ScprTask1, ScprTask4 } from './Second_Variables';
import { ThprTask1, ThprTask2, ThprTask3, ThprTask4, ThprTask5 } from "./Third_ConditionalStatements";
import { FourthTask1, FourthTask2, FourthTask3, FourthTask4, FourthTask5 } from "./Fourth_ClassComponents";
import images from './images';

export default function Tasks() {
    return (
        <>
            <div className="FirstPrictice" style={{ display: "none" }}>
                <FrprTask1 />
                <FrprTask2 />
                <FrprTask3 />
                <FrprTask4 />
                <FrprTask5 />
                <FrprTask6 />
            </div>
            <div className="SecondPrictice" style={{ display: "none" }}>
                <ScprTask1 />
                <ScprTask4 />
            </div>
            <div className="ThirdPrictice" style={{ display: "none" }}>
                <ThprTask1 />
                <ThprTask2 />
                <ThprTask3 />
                <ThprTask4 />
                <ThprTask5 />
            </div>
            <div className="FourhPrictice">
                <FourthTask1 src={images.test} books={{
                    book1: { name: 'Психология лжи', src: images.book1 },
                    book2: { name: 'Совершенный код', src: images.book2 },
                    book3: { name: 'В конце они оба умрут', src: images.book3 }
                }} name="Дима" author="Егор" />
                <FourthTask2 />
                <FourthTask3 />
                <FourthTask4 />
                <FourthTask5 />
            </div>
        </>
    );

}