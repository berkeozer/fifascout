import React, { Component } from "react";
import { Card, Row, Col,CardImg,CardBody,CardTitle,Label} from "reactstrap";
import pic from "../assets/img/haland.jpeg";
import Select from "react-select";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MinimizeIcon from "@material-ui/icons/Minimize";
import vsImg from "../assets/img/vs.jpg"
import ronaldo from "../assets/img/ronaldo.jpeg";
import messi from "../assets/img/messi.jpeg";
const options = [
  { value: "messi", label: "Messi" },
  { value: "ronaldo", label: "Ronaldo" },

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
            defaultValue={{ label: "Lionel Messi", value: 0 }}
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
            defaultValue={{ label: "Cristiano Ronaldo", value: 0 }}
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
                <CardImg top width="100%" top height="80%" src={messi} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h2" style={{textAlign:"center"}}>
                                Lionel Messi
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
                      <CardImg top width="100%" top height="80%" src={ronaldo} alt="Card image cap" />
                      <CardBody>
                          <CardTitle tag="h2" style={{textAlign:"center"}}>
                                Cristiano Ronaldo
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
                               93
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowUpwardIcon style={{ color: "green" }}/>
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
                              <Col style={{marginLeft:55}}>
                             
                               <Label tag ="h2">
                               88
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowUpwardIcon style={{ color: "green" }}/>
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
                              <Col style={{marginLeft:60}}>
                             
                               <Label tag ="h2">
                               75
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowDownwardIcon color="secondary"/>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   SprintSpeed:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:25}}>
                             
                               <Label tag ="h2">
                               87
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowDownwardIcon color="secondary"/>
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
                              <Col style={{marginLeft:35}}>
                             
                               <Label tag ="h2">
                               93
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowUpwardIcon style={{ color: "green" }}/>
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
                              <Col style={{marginLeft:55}}>
                             
                               <Label tag ="h2">
                               94
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowUpwardIcon style={{ color: "green" }}/>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   LongShots:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:40}}>
                             
                               <Label tag ="h2">
                               91
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowDownwardIcon color="secondary"/>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   ShotPower:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:35}}>
                             
                               <Label tag ="h2">
                               87
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowDownwardIcon color="secondary"/>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   ShortPassing:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:15}}>
                             
                               <Label tag ="h2">
                               95
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowUpwardIcon style={{ color: "green" }}/>
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
                              <Col style={{marginLeft:50}}>
                             
                               <Label tag ="h2">
                               90
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowDownwardIcon color="secondary"/>
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
                              <Col style={{marginLeft:60}}>
                             
                               <Label tag ="h2">
                               70
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowDownwardIcon color="secondary"/>
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
                              <Col style={{marginLeft:75}}>
                             
                               <Label tag ="h2">
                               92
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowDownwardIcon color="secondary"/>
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
                              <Col style={{marginLeft:55}}>
                             
                               <Label tag ="h2">
                               87
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowDownwardIcon color="secondary"/>
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
                              <Col style={{marginLeft:60}}>
                             
                               <Label tag ="h2">
                               90
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowUpwardIcon style={{ color: "green" }}/>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   SprintSpeed:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:25}}>
                             
                               <Label tag ="h2">
                               92
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowUpwardIcon style={{ color: "green" }}/>
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
                              <Col style={{marginLeft:35}}>
                             
                               <Label tag ="h2">
                               90
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowDownwardIcon color="secondary"/>
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
                              <Col style={{marginLeft:55}}>
                             
                               <Label tag ="h2">
                               93
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowDownwardIcon color="secondary"/>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   LongShots:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:40}}>
                             
                               <Label tag ="h2">
                               92
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowUpwardIcon style={{ color: "green" }}/>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   ShotPower:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:35}}>
                             
                               <Label tag ="h2">
                               94
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowUpwardIcon style={{ color: "green" }}/>
                               </Col>
                               </Row>
                             
                           </Card>
                           <Card style={{borderColor:"#5e72e4",height:40,width:380,marginTop:20,borderRadius:40,alignSelf:"center"}}>
                               <Row style={{marginTop:5}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   ShortPassing:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:15}}>
                             
                               <Label tag ="h2">
                               88
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowDownwardIcon color="secondary"/>
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
                              <Col style={{marginLeft:50}}>
                             
                               <Label tag ="h2">
                               94
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowUpwardIcon style={{ color: "green" }}/>
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
                              <Col style={{marginLeft:60}}>
                             
                               <Label tag ="h2">
                               75
                               </Label>
                               </Col>
                               <Col style={{marginLeft:20}}>
                               <ArrowUpwardIcon style={{ color: "green" }}/>
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
