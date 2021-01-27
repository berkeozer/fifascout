import React, { Component } from 'react'
import {
    Col,
    Row,
    Button,
    Form,
    Card,
    CardImg,
    FormGroup,
    Jumbotron,
    Container,
    Label,
    Input,
    FormText,
    InputGroup,
    CardBody,
    CardTitle,
  } from "reactstrap";
  import pic from "../assets/img/haland.jpeg";
export default class PlayerDetail extends Component {
    render() 
    {

        return (
            <div style={{ marginTop: 30 }}>
               
                      <Row >
                          <Col style={{marginLeft:150}}>
                          <Row>

                          
                          <Card style={{ height: "150px",width:"420px",borderColor:"#5e72e4"}}>
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h2"
                            className="text-uppercase text-muted mb-0"
                          >
                            Height
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                           185
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-sort" />
                          </div>
                        </Col>
                      </Row>
                     
                    </CardBody>
                  </Card>
                  </Row>
                  <Row style = {{marginTop:20}}>
                  <Card style={{ height: "150px",width:"420px",borderColor:"#5e72e4"}}>
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h2"
                            className="text-uppercase text-muted mb-0"
                          >
                            Potential
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                           93
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-star" />
                          </div>
                        </Col>
                      </Row>
                     
                    </CardBody>
                  </Card>
                  </Row>
                        </Col>
                          <Col>
                          <Card style = {{height:350,width:350,borderColor:"#fb6340",margin:20,}} >
                      <CardImg top width="100%" src={pic} alt="Card image cap" />
                      <CardBody>
                          <CardTitle tag="h2" style={{textAlign:"center"}}>
                                Erling Haland
                          </CardTitle>
                      </CardBody>
                            </Card>
                          </Col>
                    <Col>
                        <Row>
                          <Card style={{ height: "150px",width:"420px",borderColor:"#5e72e4"}}>
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h2"
                            className="text-uppercase text-muted mb-0"
                          >
                            Overall
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            91
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-trophy" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  </Row>
                  <Row style = {{marginTop:20}}>
                        
                  <Card style={{ height: "150px",width:"420px",borderColor:"#5e72e4"}}>
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h2"
                            className="text-uppercase text-muted mb-0"
                          >
                            Age
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            21
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-calendar" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  </Row>
                          
                          </Col>
                    
                       </Row>
                       <Row style={{marginTop:30}}>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Strength:
                               </Label  >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2" >
                               90
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Weight:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               77
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Acceleration:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               89
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340",marginRight:-50}}>
                                   Sprint Speed:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:10}}>
                             
                               <Label tag ="h2">
                               92
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Finishing:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               88
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340",marginRight:-50}}>
                                   Long Shoots:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:10}}>
                             
                               <Label tag ="h2">
                               87
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                          
                          
                       </Row>
                       <Row style={{marginTop:30}}>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}> 
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Crossing:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               86
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340",marginRight:-50}}>
                                   Long Passing:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:10}}>
                             
                               <Label tag ="h2">
                               78
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340",marginRight:-50}}>
                                   Short Passing:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:10}}>
                             
                               <Label tag ="h2">
                               85
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Vision:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               87
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Agility:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               88
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Balance:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               93
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                          
                          
                       </Row>
                       <Row style={{marginTop:30}}>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Heading:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               93
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Interceptions:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               65
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Marking:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               61
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340",marginRight:-60}}>
                                   Sliding Tackle:
                               </Label >
                                   </Col>
                              <Col style={{marginRight:-50}}>
                             
                               <Label tag ="h2">
                               67
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340",marginRight:-60}}>
                                   Standing Tackle:
                               </Label >
                                   </Col>
                              <Col style={{marginRight:-60}}>
                             
                               <Label tag ="h2">
                               65
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Agression:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               88
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                          
                          
                       </Row>
                       <Row style={{marginTop:30}}>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Positioning:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               86
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Reflexes:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               35
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Speed:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               90
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Free Kick:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               80
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Volley:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               83
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                          
                          
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Mental:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               89
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                       </Row>
                       <Row style={{marginTop:30}}>
                       <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Positioning:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-20}}>
                             
                               <Label tag ="h2">
                               82
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340",marginRight:-60}}>
                                   Shot Power:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:10}}>
                             
                               <Label tag ="h2">
                               92
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340",marginRight:-60}}>
                                   Ball Control:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:10}}>
                             
                               <Label tag ="h2">
                               90
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Dribbling:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               93
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Handling:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               55
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>
                           <Col>
                           <Card style={{borderColor:"#5e72e4",height:70,width:270}}>
                               <Row style={{marginTop:15}}>
                                   <Col style={{marginLeft:30}}>
                                   <Label tag ="h2" style={{color:"#fb6340"}}>
                                   Kicking:
                               </Label >
                                   </Col>
                              <Col style={{marginLeft:-60}}>
                             
                               <Label tag ="h2">
                               65
                               </Label>
                               </Col>
                               </Row>
                             
                           </Card>
                           </Col>

                       </Row>
                       
            </div>
        )
    }
}
