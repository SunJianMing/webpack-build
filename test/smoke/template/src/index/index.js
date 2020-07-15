import React from 'react';
import ReactDom from 'react-dom';
import '../style/index.css';
import '../../common/index';
import imgSrc from '../assets/b.png';
// import { a } from './tree-shaking';
// import Worker from '../worker/my.worker.js'

// import mrsun_drag from 'mrsun_drag'
// console.log(mrsun_drag(1,2),1)
// const worker = new Worker();
// worker.addEventListener('message', e => {
//     console.log(e.data, '1111');
// })

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

ReactDom.render(<App />, document.querySelector('#root'));