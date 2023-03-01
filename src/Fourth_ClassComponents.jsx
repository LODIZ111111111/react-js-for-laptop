import React from 'react';
import "./css/fourthPrictice.css";

export class FourthTask1 extends React.Component {
    render() {
        return (
            <div>
                <p><img src={this.props.src} alt="Изображение" /></p>
                <p><b>Название:</b> {this.props.name}</p>
                <p><b>Автор:</b> {this.props.author}</p>
                <h1 className="favorite-books">Список трёх любимых книг:</h1>
                <div className="books">
                    <div className="book">
                        <p>{this.props.books.book1.name}</p>
                        <img src={this.props.books.book1.src} alt="Изображение" />

                    </div>
                    <div className="book">
                        <p>{this.props.books.book2.name}</p>
                        <img src={this.props.books.book2.src} alt="Изображение" />
                    </div>
                    <div className="book">
                        <p>{this.props.books.book3.name}</p>
                        <img src={this.props.books.book3.src} alt="Изображение" />
                    </div>
                </div>
            </div>
        );
    }
}

export class FourthTask2 extends React.Component {
    render() {
        return (
            <>

            </>
        );
    }
}

export class FourthTask3 extends React.Component {
    render() {
        return (
            <>

            </>
        );
    }
}

export class FourthTask4 extends React.Component {
    render() {
        return (
            <>

            </>
        );
    }
}

export class FourthTask5 extends React.Component {
    render() {
        return (
            <>

            </>
        );
    }
}