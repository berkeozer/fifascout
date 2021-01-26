import React, { Component } from "react";
import { Card, Row, Col,CardImg,CardBody,CardTitle,Label} from "reactstrap";
import pic from "../assets/img/haland.jpeg";
import Select from "react-select";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MinimizeIcon from "@material-ui/icons/Minimize";
import vsImg from "../assets/img/vs.jpg"
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export class PlayerCompare extends Component {
  
  handleChange (e) {
    console.log('handle change called')
  }
  render() {
    const { selection } = "berke";
    return (
      <div>
        <Row>
          <Col style={{marginTop:20,marginLeft:100}}>
          <div style={{borderColor:"#fb6340"}}>
          <Select
            borderColor="red"
            value={selection}
            onChange={this.handleChange}
            options={options}
          />
          <div className="text-center">
            <h2>Please choose a player </h2>
          </div>
        </div>
          </Col>
          <Col>
          </Col>
          <Col style={{marginTop:25,marginRight:100}}>
          <div>
          <Select
            value={selection}
            onChange={this.handleChange}
            options={options}
          />
          <div className="text-center">
            <h2>Please choose a player </h2>
          </div>
        </div>
          </Col>
        </Row>
        <Row>
        <Col>
            <Card style = {{height:350,width:350,borderColor:"#fb6340",marginTop:20,marginLeft:170,borderRadius:20}} >
                <CardImg top width="100%" src={pic} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h2" style={{textAlign:"center"}}>
                                Erling Haland
                      </CardTitle>
                   </CardBody>
              </Card>
        </Col>
       <Col style={{alignSelf:"center",textAlign:"center"}}>
       <img
        alt="..."
        className="rounded-circle"
        src={vsImg}
        width="300"
        height="300"
      />
       </Col>
        
      
       
        <Col>
        <Card style = {{height:350,width:350,borderColor:"#fb6340",marginTop:20,marginLeft:50,borderRadius:20}} >
                      <CardImg top width="100%" src={pic} alt="Card image cap" />
                      <CardBody>
                          <CardTitle tag="h2" style={{textAlign:"center"}}>
                                Erling Haland
                          </CardTitle>
                      </CardBody>
                            </Card>
        </Col>
        </Row>
        <Row>
        <Col style={{marginTop:20,marginLeft:100}}>
          <Card style = {{height:700,width:500,borderColor:"#fb6340",marginTop:20,borderRadius:20}}>
          <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Overall:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:75}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               <Col style={{marginLeft:10}}>
                               <ArrowUpwardIcon/>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Potential:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Strength:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Sprint Speed:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Positioning:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Finishing:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Long Shots:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Shot Power:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Short Passing:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Dribbling:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Marking:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           
                        
          </Card>
          </Col>
         <Col>
         </Col>
          <Col>
          <Card style = {{height:700,width:500,borderColor:"#fb6340",marginTop:40,borderRadius:20,marginRight:100}}>
          <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Overall:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Potential:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Strength:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Sprint Speed:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Positioning:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Finishing:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Long Shots:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Shot Power:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Short Passing:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Dribbling:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Marking:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               184
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
          </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PlayerCompare;
