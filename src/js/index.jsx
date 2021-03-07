import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>テスト成功</h1>
        <Timer />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('pomodoro'));
