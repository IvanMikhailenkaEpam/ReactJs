import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css"

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const element = React.createElement(
    "h1",
    {className: "title"},
    "React.createElement"
);


class HallowWorldComponent extends React.Component {
    render() {
        return <h1 className={styles.hello}>React.Component</h1>
    }

}

class HallowWorldPureComponent extends React.PureComponent {
    render() {
        return <h1>React.PureComponent</h1>
    }

}

function FunctionComponent() {
    return (
        <h1>
            FunctionComponent
        </h1>
    )
}

class MainComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                {element}
                <HallowWorldComponent/>
                <HallowWorldPureComponent/>
                <FunctionComponent/>
            </React.Fragment>
        )
    }
}

/*ReactDOM.render(<MainComponent/>, document.getElementById("app"));*/

