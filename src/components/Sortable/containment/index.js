import React from 'react';
import Sortable from 'react-anything-sortable';
import DemoItem from'./SortableItem';

export default class Containment extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleSort(data) {
    this.setState({
      result: data.join(' ')
    });
  }

  render() {
    return (
      <div className="demo-container">
        <h4 className="demo-title">
          Constrain the dragging area by setting <code>containment</code>
          <a href="https://github.com/jasonslyvia/react-anything-sortable/tree/master/demo/pages/containment.js" target="_blank">source</a>
        </h4>
        <p className="sort-result">{this.state.result}</p>
        <Sortable className="containment-demo" containment>
          <DemoItem className="item-1" sortData="react" key={1}>
            1React
          </DemoItem>
          <DemoItem className="item-2" sortData="angular" key={2}>
            2Angular
          </DemoItem>
          <DemoItem className="item-3" sortData="backbone" key={3}>
            3Backbone
          </DemoItem>
        </Sortable>
      </div>
    );
  }
}
