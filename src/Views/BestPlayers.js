import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import React, { Component } from "react";
import pic from "../assets/img/haland.jpeg";
import { Badge,Jumbotron,Card, CardTitle,Row,Col,Label,CardImg,CardBody} from "reactstrap";

class BestPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      isLoading: false,
      successModal: false,
      week_id: 1,
      fixture: [],
    };
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
  rankingFormatteraway(cell, row) {
    {
      console.log(row);
    }
    return (
      <div>
        <span className="rounded-circle" width="40" height="40">
          <h2>{row.id}</h2>
        </span>
      </div>
    );
  }
  addProducts(quantity) {
    const startId = 0;
    for (let i = 1; i < quantity; i++) {
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

  render() {
    this.addProducts(50);
    console.log(this.state.players);
    return (
      <>
     
    
      <BootstrapTable
      border
        ref="table"
        bordered={false}
        data={this.state.players}
        pagination={true}
        tableStyle={{ border: "black 2.5px solid" }}
        trStyle={{ color: "#fb6340",textAlign:"center" }}
      >
        <TableHeaderColumn
          dataField="id"
          width="10%"
          dataAlign="center"
          isKey={true}
          dataFormat={this.rankingFormatteraway}
        >
          <h2 style={{ color: "#5e72e4" }}>Ranking </h2>
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
      </>
    );
  }
}
export default BestPlayer;
