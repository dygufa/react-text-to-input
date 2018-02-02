"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var ReactTextToInput = /** @class */ (function (_super) {
    __extends(ReactTextToInput, _super);
    function ReactTextToInput(props) {
        var _this = _super.call(this, props) || this;
        _this.startEditing = function () {
            _this.setState({
                editing: true
            });
        };
        _this.onInputKeyPress = function (e) {
            if (e.key === "Enter") {
                _this.setState({
                    editing: false
                });
                _this.props.onChange(_this.state.value);
            }
        };
        _this.onInputChange = function (e) {
            var value = e.target.value;
            _this.setState({
                value: value
            });
        };
        _this.onInputBlur = function () {
            _this.setState({
                editing: false
            });
            _this.props.onChange(_this.state.value);
        };
        _this.state = {
            editing: false,
            value: props.value
        };
        return _this;
    }
    ReactTextToInput.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            value: nextProps.value
        });
    };
    ReactTextToInput.prototype.render = function () {
        if (this.state.editing) {
            return <input autoFocus value={this.state.value} onChange={this.onInputChange} onKeyPress={this.onInputKeyPress} onBlur={this.onInputBlur}/>;
        }
        return <div className={this.props.textClassName} style={this.props.textStyle} onClick={this.startEditing}>
            {this.props.value}
        </div>;
    };
    return ReactTextToInput;
}(React.Component));
exports["default"] = ReactTextToInput;
