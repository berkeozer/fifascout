import React from "react";
import { register } from "../UserFunction";
import { Link, NavLink, withRouter } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Modal,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      username: "",
      password_confirm: "",
      successModal: false,
      warningModal: false,
      error: "",
    };
    this.HandleChange = this.HandleChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.togglesuccessModal = this.togglesuccessModal.bind(this);
    this.togglewarningModal = this.togglewarningModal.bind(this);
    this.GoLogin = this.GoLogin.bind(this);
  }
  GoLogin = (e) => {
    this.props.history.push("/login");
  };

  togglesuccessModal() {
    this.setState({
      successModal: true,
    });
  }

  togglewarningModal() {
    this.setState({
      warningModal: true,
    });
  }
  closeCollapse = () => {
    this.setState({
      warningModal: false,
    });
    window.location.reload(false);
  };
  HandleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  HandleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password_confirm: this.state.password_confirm,
    };

    register(newUser)
      .then((res) => {
        this.togglesuccessModal();
      })
      .catch((err) => {
        /*this.setState({
          error: err.response.data.Message,
        });*/
        this.togglesuccessModal();
        //this.togglewarningModal();
      });
  };
  render() {
    return (
      <>
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.successModal}
          toggle={() => this.toggleModal("exampleModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Succesful
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">You succesfully registered !</div>
          <div className="modal-footer">
            <Button
              color="primary"
              data-dismiss="modal"
              type="button"
              onClick={this.GoLogin}
            >
              Go to Login Screen
            </Button>
          </div>
        </Modal>

        <Modal
          className="modal-dialog-centered modal-danger"
          contentClassName="bg-gradient-danger"
          isOpen={this.state.warningModal}
          toggle={this.closeCollapse}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-notification">
              Your attention is required
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={this.closeCollapse}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="py-3 text-center">
              <i className="ni ni-bell-55 ni-3x" />
              <h4 className="heading mt-4">You could not registered !</h4>
              <p>{this.state.error}</p>
            </div>
          </div>
          <div className="modal-footer">
            <Button
              className="btn-white"
              color="default"
              type="button"
              onClick={this.closeCollapse}
            >
              Ok, Got it
            </Button>
            <Button
              className="text-white ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={this.closeCollapse}
            >
              Close
            </Button>
          </div>
        </Modal>
        <Col lg="8" md="5">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4"></div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Firstname"
                      type="firstname"
                      id="firstname"
                      onChange={this.HandleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Lastname"
                      type="lastname"
                      id="lastname"
                      onChange={this.HandleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        id="email"
                        onChange={this.HandleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        id="password"
                        onChange={this.HandleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Confirm Password"
                        type="password"
                        id="password_confirm"
                        onChange={this.HandleChange}
                      />
                    </InputGroup>
                  </FormGroup>

                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username"
                      type="username"
                      id="username"
                      onChange={this.HandleChange}
                    />
                  </InputGroup>
                </FormGroup>

                <div className="text-center">
                  <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={this.HandleSubmit}
                  >
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default withRouter(Register);
