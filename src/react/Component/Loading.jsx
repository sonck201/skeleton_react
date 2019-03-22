import React, {Component} from 'react';

export default class Alert extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={this.getClassName()} role="alert">{this.props.children}</div>
    }

    getClassName() {
        let alertLevel;
        switch (this.props.level) {
            case 'primary':
            case 'secondary':
            case 'success':
            case 'danger':
            case 'warning':
            case 'info':
            case 'light':
            case 'dark':
                alertLevel = this.props.level;
                break;
            default:
                alertLevel = 'warning';
        }

        return `alert alert-${this.props.level}`;
    }
}
