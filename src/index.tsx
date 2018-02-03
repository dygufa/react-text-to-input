import * as React from "react";

export interface IReactTextToInputProps {
    value: string;
    onChange: (value: string) => void;
    textClassName?: string;
    inputClassName?: string;
    textStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    inputProps?: React.HTMLProps<HTMLInputElement>;  
}

export interface IReactTextToInputState {
    editing: boolean;
    value: string;
}

export default class ReactTextToInput extends React.Component<IReactTextToInputProps, IReactTextToInputState> {
    constructor(props: IReactTextToInputProps) {
        super(props);

        this.state = {
            editing: false,
            value: props.value,
        };
    }

    componentWillReceiveProps(nextProps: IReactTextToInputProps) {
        this.setState({
            value: nextProps.value,
        });
    }

    startEditing = () => {
        this.setState({
            editing: true,
        });
    }

    onInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            this.setState({
                editing: false,
            });

            this.props.onChange(this.state.value);
        }
    }

    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        this.setState({
            value,
        });
    }

    onInputBlur = () => {
        this.setState({
            editing: false,
        });

        this.props.onChange(this.state.value);
    }

    render() {
        if (this.state.editing) {
            return <input
                autoFocus
                value={this.state.value}
                onChange={this.onInputChange}
                onKeyPress={this.onInputKeyPress}
                onBlur={this.onInputBlur}
                style={this.props.inputStyle}
                className={this.props.inputClassName}
                {...this.props.inputProps}
            />;
        }

        return <div
            className={this.props.textClassName}
            style={{...this.props.textStyle, ...{
                minHeight: "20px"
            }}}
            onClick={this.startEditing}
        >
            {this.props.value}
        </div>;
    }
}
