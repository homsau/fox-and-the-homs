import React from "react";
import { Container } from 'react-bootstrap';
import classNames from "classnames";

export default class Hero extends React.Component {

//   static propTypes = {
//     backgroundImage: React.PropTypes.string,
//   };

  render() {
    const _style = {
        marginBottom: 0,

    };
    if (this.props.backgroundImage) {
      _style.backgroundImage = `url(${this.props.backgroundImage})`;
    }
    const _className = classNames("neal-hero jumbotron jumbotron-fluid", this.props.className);
    return (
      <div {... this.props} className={_className} style={_style}>
        <Container>
          { this.props.children }
        </Container>
      </div>
    );
  }
}