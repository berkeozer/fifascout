import React, { Component } from "react";

import {
  Col,
  Row,
  Button,
  Form,
  Card,
  FormGroup,
  Jumbotron,
  Container,
  Label,
  Input,
  FormText,
  InputGroup,
} from "reactstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Link, NavLink, withRouter } from "react-router-dom";
class FilterPage extends Component {
  constructor(props) {
    super(props);

    this.state = 
    {
      value: { min: 20, max: 100 },
      st_value: { min: 20, max: 100 },
      he_value: { min: 20, max: 100 },
      we_value: { min: 20, max: 100 },
      ov_value: { min: 20, max: 100 },
      po_value: { min: 20, max: 100 },
      ac_value: { min: 20, max: 100 },
      sp_value: { min: 20, max: 100 },
      fi_value: { min: 20, max: 100 },
      lo_value: { min: 20, max: 100 },
      pos_value: { min: 20, max: 100 },
      sp_value: { min: 20, max: 100 },
      cr_value: { min: 20, max: 100 },
      lp_value: { min: 20, max: 100 },
      sh_value: { min: 20, max: 100 },
      vi_value: { min: 20, max: 100 },
      ag_value: { min: 20, max: 100 },
      ba_value: { min: 20, max: 100 },
      bc_value: { min: 20, max: 100 },
      db_value: { min: 20, max: 100 },
      hd_value: { min: 20, max: 100 },
      in_value: { min: 20, max: 100 },
      mr_value: { min: 20, max: 100 },
      slt_value: { min: 20, max: 100 },
      stt_value: { min: 20, max: 100 },
      agg_value: { min: 20, max: 100 },
      han_value: { min: 20, max: 100 },
      k_value: { min: 20, max: 100 },
      ps_value: { min: 20, max: 100 },
      re_value: { min: 20, max: 100 },
      sp_alue: { min: 20, max: 100 },

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    
    this.props.history.push("/admin/searchplayer");
        /*this.setState({
          error: err.response.data.Message,
        });*/
        //this.togglewarningModal();
      
  };
  render() {
    return (
      <>
        <div>
          <Jumbotron tag="h1" style={{ height: 0, marginTop: -20 ,textAlign:"center",marginBottom:0,color:"#fb6340"}}>
          
                FIND YOUR PLAYER
                
         
          </Jumbotron>
        </div>
        <div style={{ marginTop: 0 }}>
      
          <Card className="bg-secondary shadow border-3">
            <Form style={{ marginLeft: 10, marginRight: 100, marginTop: 40 }}>
              <Row
                style={{
                  textAlign: "center",
                  paddingLeft: 340,
                  paddingRight: 340,
                }}
              >
                <Col>
                  <Label for="exampleEmail">Name</Label>
                  <Input
                    style={{ borderColor: "#fb6340" }}
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder=""
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Col>
                  <Label for="exampleSelect">Position</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <Input
                      style={{ borderColor: "#fb6340" }}
                      type="select"
                      name="select"
                      id="exampleSelect"
                    >
                      <option>GK</option>
                      <option>RB</option>
                      <option>CB</option>
                      <option>LB</option>
                      <option>RWB</option>
                      <option>LWB</option>
                      <option>CDM</option>
                      <option>CM</option>
                      <option>CAM</option>
                      <option>RM</option>
                      <option>LM</option>
                      <option>RW</option>
                      <option>LW</option>
                      <option>CF</option>
                      <option>ST</option>
                    </Input>
                  </InputGroup>
                </Col>
                <Col>
                  <Label for="exampleSelect">Nationality</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      style={{ borderColor: "#fb6340" }}
                    >
                      <option>Afghanistan</option>
                      <option>Albanian</option>
                      <option>American</option>
                      <option>Armenian</option>
                      <option>Argentinian</option>
                      <option>British</option>
                      <option>Bulgarian</option>
                      <option>Bolivian</option>
                      <option>Canadian</option>
                      <option>Chinese</option>
                      <option>Czech</option>
                      <option>Egyptian</option>
                      <option>Eritrean</option>
                      <option>Estonian</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Greek</option>
                      <option>Hungarian</option>
                      <option>Ireland</option>
                      <option>Italian</option>
                      <option>Iranian</option>
                      <option>Japanese</option>
                      <option>Mexican</option>
                      <option>Nigerien</option>
                      <option>Slovak</option>
                      <option>South African'</option>
                      <option>Turkish</option>
                      <option>Ukrainian</option>
                      
                    </Input>
                  </InputGroup>
                </Col>
                <Col>
                  <Label for="exampleSelect">League</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      style={{ borderColor: "#fb6340" }}
                    >
                      <option>Spain's La Liga</option>
                      <option>Barclays English Premier League</option>
                      <option> German Bundesliga</option>
                      <option>Italian Serie A</option>
                      <option>France's Ligue 1</option>
                      <option>Brasileirão</option>
                      <option>Argentina's Primera Division</option>
                      <option>Dutch Eredivisie</option>
                      <option>Portugal's Liga ZON Sagres</option>
                      <option>Russian Premier League</option>
                      <option>Mexico's Liga MX</option>
                      <option>Turkish Süper Lig</option>
                      <option>Ukranian Premier League</option>
                      <option>Czech Republic's Gambrinus Liga</option>
                      <option>Belgian Pro League</option>
                     

                    </Input>
                  </InputGroup>
                </Col>
                <Col>
                  <Label for="exampleSelect">Team</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      style={{ borderColor: "#fb6340" }}
                    >
                      <option>Liverpool</option>
                      <option>Manchester United</option>
                      <option>Barcelona</option>
                      <option>Real Madrid</option>
                      <option>Bayern Munich</option>
                      <option>Atletico Madrid</option>
                      <option>Manchester City</option>
                      <option>Paris Saint-Germain</option>
                      <option>Chelsea</option>
                      <option>Tottenham Hotspur</option>
                      <option>Juventus</option>
                      <option>Arsenal</option>
                      <option>Borussia Dortmund </option>
                      <option>Atletico Madrid</option>
                      <option>Inter</option>
                      <option>Zenit</option>
                      <option>Schalke</option>
                      <option>Everton</option>
                      <option>Lyon</option>
                      <option>Napoli</option>
                      <option>Eintracht Frankfurt</option>
                      <option>Fenerbahçe</option>
                      <option>Galatasaray</option>
                      <option>Beşiktaş</option>
                      

                    </Input>
                  </InputGroup>
                </Col>
                <Col>
                  <Label for="exampleSelect">Preferred Foot</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <Input
                      type="select"
                      color="yellow"
                      name="select"
                      id="exampleSelect"
                      style={{ borderColor: "#fb6340" }}
                    >
                      <option>L</option>
                      <option>R</option>
                    
                    </Input>
                  </InputGroup>
                </Col>
              </Row>{" "}
              <Row style={{ marginTop: 20 }}>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Strength</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.st_value}
                      onChange={st_value => this.setState({ st_value })}
                    />
                  </InputGroup>
                </Col>

                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Height</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.he_value}
                      onChange={he_value => this.setState({ he_value })}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <Label for="examplePassword">Weight</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.we_value}
                      onChange={we_value => this.setState({ we_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Overall</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.ov_value}
                      onChange={ov_value => this.setState({ ov_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Potential</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.po_value}
                      onChange={po_value => this.setState({ po_value })}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row style={{ marginTop: 30 }}>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Acceleration</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.ac_value}
                      onChange={ac_value => this.setState({ ac_value })}
                    />
                  </InputGroup>
                </Col>

                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword"> Sprint Speed</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.sp_value}
                      onChange={sp_value => this.setState({ sp_value })}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <Label for="examplePassword">Finishing</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.fi_value}
                      onChange={fi_value => this.setState({ fi_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Long Shots</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.lo_value}
                      onChange={lo_value => this.setState({ lo_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Positioning</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.pos_value}
                      onChange={pos_value => this.setState({ pos_value })}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row style={{ marginTop: 30 }}>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword"> Shot Power</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.sp_value}
                      onChange={sp_value => this.setState({ sp_value })}
                    />
                  </InputGroup>
                </Col>

                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Crossing</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.cr_value}
                      onChange={cr_value => this.setState({ cr_value })}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <Label for="examplePassword">Long Passing</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.lp_value}
                      onChange={lp_value => this.setState({ lp_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Short Passing</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.sh_value}
                      onChange={sh_value => this.setState({ sh_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Vision</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.vi_value}
                      onChange={vi_value => this.setState({ vi_value })}
                    />
                  </InputGroup>
                </Col>
              </Row>{" "}
              <Row style={{ marginTop: 30 }}>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Agility</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.ag_value}
                      onChange={ag_value => this.setState({ ag_value })}
                    />
                  </InputGroup>
                </Col>

                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Balance</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.ba_value}
                      onChange={ba_value => this.setState({ ba_value })}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <Label for="examplePassword">Ball Control</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.bc_value}
                      onChange={bc_value => this.setState({ bc_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Dribbling</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.db_value}
                      onChange={db_value => this.setState({ db_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Heading</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.hd_value}
                      onChange={hd_value => this.setState({ hd_value })}
                    />
                  </InputGroup>
                </Col>
              </Row>{" "}
              <Row style={{ marginTop: 30 }}>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Interceptions</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.in_value}
                      onChange={in_value => this.setState({ in_value })}
                    />
                  </InputGroup>
                </Col>

                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword"> Marking</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.mr_value}
                      onChange={mr_value => this.setState({ mr_value })}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <Label for="examplePassword">Sliding Tackle</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.slt_value}
                      onChange={slt_value => this.setState({ slt_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Standing Tackle</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.stt_value}
                      onChange={stt_value => this.setState({ stt_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Aggression</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.agg_value}
                      onChange={agg_value => this.setState({ agg_value })}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row style={{ marginTop: 30 }}>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Handling</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.han_value}
                      onChange={han_value => this.setState({ han_value })}
                    />
                  </InputGroup>
                </Col>

                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword"> Kicking</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.k_value}
                      onChange={k_value => this.setState({ k_value })}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <Label for="examplePassword">Positioning</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.ps_value}
                      onChange={ps_value => this.setState({ ps_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Reflexes</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.re_value}
                      onChange={re_value => this.setState({ re_value })}
                    />
                  </InputGroup>
                </Col>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">Speed</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={this.state.sp_alue}
                      onChange={sp_alue => this.setState({ sp_alue })}
                      
                    />
                  </InputGroup>
                </Col>
              </Row>
              <div className="text-center mt-5">
                <Button color="warning" onClick={this.handleSubmit}>Submit</Button>
              </div>
            </Form>
          </Card>
        </div>
      </>
    );
  }
}

export default FilterPage;
