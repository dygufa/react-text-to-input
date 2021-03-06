import { render } from "react-dom";
import * as React from "react";
import TextToInput from "react-text-to-input";

interface IAppProps {

}

interface IAppState {
    value: string
}

class App extends React.Component<IAppProps, IAppState> {
    state = {
        value: "Click here to edit"
    }

    onInputChange = (value: string) => {
        this.setState({
            value
        });
    }

    render() {
        return (
            <div>
                <h1>Example:</h1>

                <TextToInput
                    value={this.state.value}
                    onChange={this.onInputChange}
                />
            </div>            
        );
    }
}

render(<App/>, document.getElementById("root")
)