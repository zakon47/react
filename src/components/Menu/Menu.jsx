import React, {Component} from "react";
import "./index.css"
import {MenuItem} from "./MenuItem/Menu";


export class Menu extends Component{
  render() {
    return (
      <div className="menu">
        {this.props.items.map((elem)=>(
          <MenuItem
            key={elem.id}
            onClick={this.props.onClick}
          >
            {elem.label}
          </MenuItem>
        ))}
        {this.props.item && (
          <div>
            {this.props.item.title}
          </div>
        )}
      </div>
    )
  }
}