import { FrprTask1, FrprTask2, FrprTask3, FrprTask4, FrprTask5, FrprTask6 } from './FirstPractice';
import { ScprTask1, ScprTask4 } from './Second_Variables';
import { ThprTask1, ThprTask2, ThprTask3, ThprTask4, ThprTask5 } from "./Third_ConditionalStatements"
import './App.css';

export default function Tasks() {
    return (
        <>
            <div className="FirstPrictice" style={{display: "none"}}>
                <FrprTask1 />
                <FrprTask2 />
                <FrprTask3 />
                <FrprTask4 />
                <FrprTask5 />
                <FrprTask6 />
            </div>
            <div className="SecondPrictice" style={{display: "none" }}>
                <ScprTask1 />
                <ScprTask4 />
            </div>
            <div className="ThirdPrictice">
                <ThprTask1 />
                <ThprTask2 />
                <ThprTask3 />
                <ThprTask4 />
                <ThprTask5 />
            </div>
        </>
    );

}