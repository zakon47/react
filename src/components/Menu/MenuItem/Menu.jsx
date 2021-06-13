import React, {Component} from "react";
import s from "./index.module.scss"


export class MenuItem extends Component{
  render() {
    return (
      <div className={s.item} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    )
  }
}