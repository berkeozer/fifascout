import React, { Component } from 'react'
import { Card, Row, Col,CardImg,CardBody,CardTitle,Label, CardHeader, CardFooter} from "reactstrap";

import hakan from "../assets/img/hakan.jpeg";
import burak from "../assets/img/burak.jpeg";
import caglar from "../assets/img/caglar.jpeg";
export default class BestPlayer extends Component {
    render() {
        return (
            <div>
                <Card  style={{borderColor:"#5e72e4",width:900,marginLeft:400}}>

               
                <Row style={{marginLeft:250}}>
                <Card style={{borderColor:"#5e72e4",height:50,width:400,marginTop:20,borderRadius:40}}>
                        <CardTitle style={{marginLeft:20,marginBottom:50}}>
                       
                        <Label tag="h1" style={{marginLeft:40,position:"absolute",top: '15%',color:"#fb6340"}}>
                            Best Players of Turkey
                        </Label>
                       
                        </CardTitle>
                        
                    </Card>
                </Row>
                <Row style={{marginLeft:100}}>
                   
                    <Card style = {{height:250,width:230,borderColor:"#fb6340",marginTop:80,marginLeft:0,borderRadius:20}} >
                <CardImg top width="100%" top height="80%"src={caglar} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h2" style={{marginTop:-20,textAlign:"center"}}>
                                Caglar Soyuncu 
                      </CardTitle>
                      <CardTitle tag="h2" style={{textAlign:"center",marginTop:-30}} >
                          80
                          </CardTitle>
                      <CardTitle style={{textAlign:"center",marginTop:-30}}>
                      <span style={{fontSize:72,color:"#fb6340"}} >&#9314;</span>
                      </CardTitle>
                   </CardBody>
              </Card>
                    
                
                    <Card style = {{height:250,width:230,borderColor:"#fb6340",marginTop:20,marginLeft:20,marginRight:20,borderRadius:20,}} >
                        
                <CardImg top width="100%" top height="80%" src={hakan} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h2" style={{marginTop:-20,marginBottom:-20,textAlign:"center"}}>
                                Hakan Calhanoglu 
                      </CardTitle>
                      <CardTitle tag="h2" style={{textAlign:"center",marginTop:10}} >
                          81
                          </CardTitle>
                      <CardTitle style={{textAlign:"center",marginTop:-40}} >
                      <span style={{fontSize:72,color:"#fb6340"}} >&#9312;</span>
                                
                      </CardTitle>
                   </CardBody>
                  
              </Card>
                 
                    
                    <Card style = {{height:250,width:230,borderColor:"#fb6340",marginTop:40,marginLeft:0,borderRadius:20}} >
                <CardImg top width="100%" top height="80%" src={burak} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h2" style={{marginTop:-25,textAlign:"center"}}>
                                Burak Yılmaz 
                      </CardTitle>
                      <CardTitle tag="h2" style={{textAlign:"center",marginTop:-30}} >
                          79
                          </CardTitle>
                      <CardTitle style={{textAlign:"center",marginTop:-30}}>
                      <span style={{fontSize:72,color:"#fb6340"}} >&#9313;</span>
                      </CardTitle>
                   </CardBody>
              </Card>
                   
                </Row>
                <Row style={{marginTop:80,marginLeft:170}}>
                <Card style={{borderColor:"#5e72e4",height:50,width:600,marginTop:20,borderRadius:40}}>
                        <CardTitle style={{marginLeft:20,marginBottom:50}}>
                        <span style={{fontSize:32,color:"#fb6341",textAlign:"center",paddingBottom:20}} >&#9315;</span>
                        <Label tag="h2" style={{marginLeft:50,position:"absolute",top: '25%'}}>
                        Yusuf Yazıcı
                        </Label>
                        <Label tag="h2" style={{marginLeft:20,position:"absolute",left: '80%',top:'30%'}}>
                            78
                        </Label>
                        </CardTitle>
                        
                    </Card>
                    
                </Row>
                <Row style={{marginTop:10,marginLeft:170}}>
                <Card style={{borderColor:"#5e72e4",height:50,width:600,marginTop:20,borderRadius:40}}>
                        <CardTitle style={{marginLeft:20,marginBottom:50}}>
                        <span style={{fontSize:32,color:"#fb6341",textAlign:"center",paddingBottom:20}} >&#9316;</span>
                        <Label tag="h2" style={{marginLeft:50,position:"absolute",top: '25%'}}>
                        Zeki Çelik
                        </Label>
                        <Label tag="h2" style={{marginLeft:20,position:"absolute",left: '80%',top:'30%'}}>
                            78
                        </Label>
                        </CardTitle>
                        
                    </Card>
                    
                </Row>
                <Row style={{marginTop:10,marginLeft:170}}>
                <Card style={{borderColor:"#5e72e4",height:50,width:600,marginTop:20,borderRadius:40}}>
                        <CardTitle style={{marginLeft:20,marginBottom:50}}>
                        <span style={{fontSize:32,color:"#fb6341",textAlign:"center",paddingBottom:20}} >&#9317;</span>
                        <Label tag="h2" style={{marginLeft:50,position:"absolute",top: '25%'}}>
                        Cengiz Ünder
                        </Label>
                        <Label tag="h2" style={{marginLeft:20,position:"absolute",left: '80%',top:'30%'}}>
                            77
                        </Label>
                        </CardTitle>
                        
                    </Card>
                    
                </Row>
                <Row style={{marginTop:10,marginLeft:170}}>
                <Card style={{borderColor:"#5e72e4",height:50,width:600,marginTop:20,borderRadius:40}}>
                        <CardTitle style={{marginLeft:20,marginBottom:50}}>
                        <span style={{fontSize:32,color:"#fb6341",textAlign:"center",paddingBottom:20}} >&#9318;</span>
                        <Label tag="h2" style={{marginLeft:50,position:"absolute",top: '25%'}}>
                        Uğurcan Çakır
                        </Label>
                        <Label tag="h2" style={{marginLeft:20,position:"absolute",left: '80%',top:'30%'}}>
                            77
                        </Label>
                        </CardTitle>
                        
                    </Card>
                    
                </Row>
                <Row style={{marginTop:10,marginLeft:170}}>
                <Card style={{borderColor:"#5e72e4",height:50,width:600,marginTop:20,borderRadius:40}}>
                        <CardTitle style={{marginLeft:20,marginBottom:50}}>
                        <span style={{fontSize:32,color:"#fb6341",textAlign:"center",paddingBottom:20}} >&#9319;</span>
                        <Label tag="h2" style={{marginLeft:50,position:"absolute",top: '25%'}}>
                        Merih Demiral
                        </Label>
                        <Label tag="h2" style={{marginLeft:20,position:"absolute",left: '80%',top:'30%'}}>
                            77
                        </Label>
                        </CardTitle>
                        
                    </Card>
                    
                </Row>
                <Row style={{marginTop:10,marginLeft:170}}>
                <Card style={{borderColor:"#5e72e4",height:50,width:600,marginTop:20,borderRadius:40}}>
                        <CardTitle style={{marginLeft:20,marginBottom:50}}>
                        <span style={{fontSize:32,color:"#fb6341",textAlign:"center",paddingBottom:20}} >&#9320;</span>
                        <Label tag="h2" style={{marginLeft:50,position:"absolute",top: '25%'}}>
                        Mert Günok
                        </Label>
                        <Label tag="h2" style={{marginLeft:20,position:"absolute",left: '80%',top:'30%'}}>
                            77
                        </Label>
                        </CardTitle>
                        
                    </Card>
                    
                </Row>
                <Row style={{marginTop:10,marginLeft:170}}>
                <Card style={{borderColor:"#5e72e4",height:50,width:600,marginTop:20,borderRadius:40}}>
                        <CardTitle style={{marginLeft:20,marginBottom:50}}>
                        <span style={{fontSize:32,color:"#fb6341",textAlign:"center",paddingBottom:20}} >&#9321;</span>
                        <Label tag="h2" style={{marginLeft:50,position:"absolute",top: '25%'}}>
                        Ozan Kabak
                        </Label>
                        <Label tag="h2" style={{marginLeft:20,position:"absolute",left: '80%',top:'30%'}}>
                            76
                        </Label>
                        </CardTitle>
                        
                    </Card>
                    
                </Row>
                </Card>
            </div>
        )
    }
}
