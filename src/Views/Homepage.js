import React, { Component, PropTypes } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Table,
  Input,
  Container,
  Jumbotron,
  Row,
  Col,
} from "reactstrap";
import Select from "react-select";
import MapChart from "./MapChart";
import BestPlayer from "./BestPlayers";

class Homepage extends Component {
  constructor(props) {
    super(props);
    window.helloComponent = this;
    this.state = {};
  }

  render() {
    return (
      <>
        <BestPlayer />
      </>
    );
  }
}
export default Homepage;
