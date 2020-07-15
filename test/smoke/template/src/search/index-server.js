'use strict';
const React = require('react')
require( '../style/search.css')
require('../../common/index');
const imgSrc = require('../assets/b.png');
// import { a } from './tree-shaking';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Text: null
        };
    }

    showText1 = () => {
        import('./test.js').then(Text => {
            this.setState({ Text: Text.default });
        });
    }

    render() {
        const { Text } = this.state;
        return (
            <div>
                {Text && <Text />}
                111App Hello React
                <img src={imgSrc} onClick={this.showText1} alt="" />
            </div>);
    }
}
module.exports = <App/>
// ReactDom.render(<App />, document.querySelector('#root'));