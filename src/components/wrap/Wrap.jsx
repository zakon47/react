import React, {Component} from "react";
import "./index.css"
import {Menu} from "../Menu/Menu";


const menu = [
  {id: 1,label: "Главная"},
  {id: 22,label: "Форум"},
  {id: 3,label: "Новости"},
]


export class Wrap extends Component{
  state = {
    item: null,
    items: null
  }
  State = () =>{
    this.setState({})
  }
  componentDidMount(prop, state) {
    console.log(prop, state)
    this.getData()
    console.log('componentDidMount')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  handleMenu = (item) => {
    console.log('item', item)
  }

  getData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json()
      this.setState({
        items: data
      })
      console.log(data)
    }catch (e) {
      console.log("ERRR", e)
    }
  }
  getDataById = async (id) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const data = await res.json()
      this.setState({
        item: data
      })
      console.log(data)
    }catch (e) {
      console.log("ERRR", e)
    }
  }
  setId = (id) => {
    this.setState({
      item:id
    })
  }
  handleExit = () => {
    this.setState({
      item: null
    })
  }
  render() {
    console.log('RENDER')
    return (
      <div className="wrap">
        <div className="head">
          <Menu
            items={menu}
            onClick={this.handleMenu}
            item={this.state.item}
          />
        </div>
        <div className="body">
          <button onClick={this.State}>State</button>
          <button onClick={this.props.update}>Update</button>
          <button onClick={this.getData}>GetDATA</button>
          {this.state.item ? (
            <>
             <div>{this.state.item.id} - {this.state.item.title}</div>
              <button onClick={this.handleExit}>Выхох</button>
            </>
          ) : (
            !!this.state.items ? (
                !this.state.items.length ? (<div>EMPTY</div>) : (
                  this.state.items.map(elem=>(
                    <li key={elem.id} onClick={()=>this.getDataById(elem.id)}>{elem.title}</li>
                  ))
                )
            ) : (
              <div>Loading...</div>
            )
          )}
        </div>
      </div>
    )
  }
}