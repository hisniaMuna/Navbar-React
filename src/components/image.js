import React from "react";
import Picture from "../components/reactLogo.svg";

export default class Image extends React.Component {
  render() {
    return (
      <div>
        <img src={Picture} alt="" />
      </div>
    );
  }
}
