import Button from "./components/Button";
import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import "./style/index.scss";

class Hello extends React.Component {
    render(){
        return <div className="main-container">
            <h1 className="greeting">Hello, {this.props.name}</h1>
            <Button />
        </div>;
    }
}

ReactDOM.render(
    <Hello name="David"/>,
    document.getElementById("root")
);
