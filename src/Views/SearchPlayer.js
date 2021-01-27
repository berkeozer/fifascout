import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import React, { Component } from "react";
import pic from "../assets/img/haland.jpeg";
import aguero from "../assets/img/aguero.png";
import bale from "../assets/img/bale.png";
import firmino from "../assets/img/firmino.jpeg";
import lukaku from "../assets/img/lukaku.jpeg";
import mane from "../assets/img/mane.png";
import messi from "../assets/img/messi.jpeg";
import mesut from "../assets/img/mesut.png";
import ronaldo from "../assets/img/ronaldo.jpeg";
import salah from "../assets/img/salah.jpeg";



class SearchPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [{id:1,pic:pic,name:"Erling Haland", potential: 95,
      overall: 89,
      age: 20,
      price: "70M"},
      {id:1,pic:aguero,name:"Sergio Aguero", potential: 88,
      overall: 90,
      age: 32,
      price: "45M"},
      {id:1,pic:bale,name:"Gareth Bale ", potential: 86,
      overall: 87,
      age: 31,
      price: "30M"},
      {id:1,pic:firmino,name:"Roberto Firmino", potential: 90,
      overall: 89,
      age: 25,
      price: "80M"},
      {id:1,pic:lukaku,name:"Romelu Lukaku", potential: 93,
      overall: 88,
      age: 24,
      price: "77M"},
      {id:1,pic:mane,name:"Sadio Mane", potential: 89,
      overall: 90,
      age: 27,
      price: "90M"},
      {id:1,pic:messi,name:"Lionel Messi", potential: 88,
      overall: 94,
      age: 32,
      price: "60M"},
      {id:1,pic:mesut,name:"Mesut Ozil", potential: 85,
      overall: 87,
      age: 33,
      price: "30M"},
      {id:1,pic:ronaldo,name:"Cristiano Ronaldo", potential: 89,
      overall: 93,
      age: 33,
      price: "70M"},
      {id:1,pic:salah,name:"Muhammed Salah", potential: 92,
      overall: 88,
      age: 26,
      price: "110M"}],
      isLoading: false,
      successModal: false,
      week_id: 1,
      fixture: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  imageFormatteraway(cell, row) {
    {
      console.log(row);
    }
    return (
      <img
        alt="..."
        className="rounded-circle"
        src={row.pic}
        width="100"
        height="100"
      />
    );
  }
  addProducts(quantity) {
    const startId = 0;
    for (let i = 0; i < quantity; i++) {
      const id = startId + i;
      this.state.players.push({
        id: id,
        pic: pic,
        name: "Erling Haaland",
        potential: 92,
        overall: 88,
        age: 20,
        price: 2100 + i,
      });
    }
  }
  handleSubmit = (e) => {
    console.log("heyy")
    this.props.history.push("/admin/playerdetail");
        /*this.setState({
          error: err.response.data.Message,
        });*/
        //this.togglewarningModal();
      
  };
  render() {
    var options = {
      onRowClick: this.handleSubmit
     }
    this.addProducts(50);
    console.log(this.state.players);
    return (
      <BootstrapTable
        options={options}
        ref="table"
        bordered={true}
        data={this.state.players}
        pagination={true}
        tableStyle={{ border: "black 2.5px solid" }}
        trStyle={{ color: "#fb6340" ,fontSize:36}}
      >
        <TableHeaderColumn dataField="id" width="10%" isKey={true}>
          <h2 style={{ color: "#5e72e4" }}> Player ID</h2>
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="pic"
          dataAlign="center"
          dataFormat={this.imageFormatteraway}
          width="20%"
        >
          <h2 style={{ color: "#5e72e4" }}> Player Image</h2>
        </TableHeaderColumn>
        <TableHeaderColumn dataField="name" width="15%" dataAlign="center">
          <h2 style={{ color: "#5e72e4" }}>Player Name</h2>
        </TableHeaderColumn>
        <TableHeaderColumn dataField="potential" width="10%" dataAlign="center">
          {" "}
          <h2 style={{ color: "#5e72e4" }}> Potential</h2>
        </TableHeaderColumn>
        <TableHeaderColumn dataField="overall" width="10%" dataAlign="center">
          {" "}
          <h2 style={{ color: "#5e72e4" }}> Overall</h2>
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="age"
          width="10%"
          dataAlign="center"
          style={{ color: "#5e72e4" }}
        >
          {" "}
          <h2 style={{ color: "#5e72e4" }}> Age</h2>
        </TableHeaderColumn>
        <TableHeaderColumn dataField="price" width="10%" dataAlign="center">
          {" "}
          <h2 style={{ color: "#5e72e4" }}> Price</h2>
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
export default SearchPlayer;
