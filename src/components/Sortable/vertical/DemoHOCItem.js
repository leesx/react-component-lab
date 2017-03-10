import React from 'react';
import {sortable} from 'react-anything-sortable';

@sortable
class DemoHOCItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default DemoHOCItem;
