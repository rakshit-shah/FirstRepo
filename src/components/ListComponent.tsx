import * as React from "react";
import * as ReactDOM from "react-dom";

class ListComponent extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select>
        <option value="ahmedabad">Ahmedabad</option>
      </select>
    );
  }
}

ReactDOM.render(<ListComponent />, document.getElementById("container"));