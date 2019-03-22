import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Alert from '../Component/Alert';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            log: '',
        };
    }

    render() {
        return (
            <section id="pageSetting" className="content__page">
                <h1 className="content__title">Log reader</h1>
                <form id="formSetting">
                    <div className="form-group">
                        <textarea className="form-control" id="log" name="log" placeholder="Input log string here"/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary" name="btnParsing" value="api">Parse log API</button>
                    <button type="submit" className="btn btn-outline-primary ml-3" name="btnParsing" value="web">Parse log Web</button>
                </form>
                <pre className="mt-5">
                    <code id="content__result" className="content__result">{this.state.log}</code>
                </pre>
            </section>
        );
    }

    componentDidMount() {
        ReactDOM.render('', document.getElementById('content__alert'));
        $('#formSetting').on('submit', e => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        let self = this,
            mode = $('button[name="btnParsing"]:focus').prop('value'),
            formData = new FormData(e.currentTarget);

        formData.append('mode', mode);

        window.axios.post('/api/log-reader/api', formData)
            .then(res => {
                ReactDOM.render(<Alert level="success">{res.data.message}</Alert>, document.getElementById('content__alert'));
                self.setState({log: res.data.detail.log});
            })
            .catch(e => {
                ReactDOM.render(<Alert level="danger">{e.response.data.message}</Alert>, document.getElementById('content__alert'));
                self.setState({log: ''});
            });
    }
}
