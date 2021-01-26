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
class FilterPage extends Component {
  render() {
    return (
      <>
        <div>
          <Jumbotron tag="h1" style={{ height: 0, marginTop: -30 ,color:"#5e72e4" ,textAlign:"center",}}>
          
                FIND YOUR PLAYER
         
          </Jumbotron>
        </div>
        <div style={{ marginTop: -60 }}>
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
                      <option>KL</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
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
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
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
                      <option>Bundesliga</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
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
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
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
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChange={(value)=>console.log(value)}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
                    />
                  </InputGroup>
                </Col>
              </Row>{" "}
              <Row style={{ marginTop: 30 }}>
                <Col style={{ marginLeft: 10 }}>
                  <Label for="examplePassword">AGILITY</Label>
                  <InputGroup style={{ marginTop: 10 }}>
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      formatLabel={(value) => `${value} `}
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
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
                      value={40}
                      onChangeComplete={(value) => console.log(value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <div className="text-center mt-5">
                <Button color="warning">Submit</Button>
              </div>
            </Form>
          </Card>
        </div>
      </>
    );
  }
}

export default FilterPage;
