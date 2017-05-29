import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from './app/layout/header';
import {MainContent} from './app/layout/main-content';

class App extends React.Component {

    render() {

        return(
            <div>
                <Header />
                <MainContent>
                    <div>The quick brown fox jumps over the lazy dog</div>
                </MainContent>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));