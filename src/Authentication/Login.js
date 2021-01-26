import React from "react";
import { login } from "../UserFunction";
import axios from "axios";
import { Link, NavLink, withRouter } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Modal,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import MapChart from "../Views/MapChart";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      warningModal: false,
      error: "",
      forgetpassword: "",
      forgetModal: false,
    };
    this.HandleChange = this.HandleChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.togglewarningModal = this.togglewarningModal.bind(this);
    this.toggleforgetModal = this.toggleforgetModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleAccess = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  toggleforgetModal() {
    this.setState({
      forgetModal: true,
    });
  }
  togglewarningModal() {
    this.setState({
      warningModal: true,
    });
  }
  closeModal = () => {
    this.setState({
      forgetModal: false,
    });
  };
  closeCollapse = () => {
    var accessTokenObj = localStorage.getItem("Access_Token");
    console.log(accessTokenObj);

    const config = {
      headers: { Authorization: `Bearer ${accessTokenObj}` },
    };

    const bodyParameters = {
      email: this.state.forgetpassword,
    };
    console.log(bodyParameters);
    axios
      .post("http://127.0.0.1:5000/auth/reset_password", bodyParameters, config)
      .then((response) => {
        console.log("Status Changed");
      })
      .catch((err) => {});

    this.setState({
      warningModal: false,
      forgetModal: false,
    });
    window.location.reload(false);
  };
  HandleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  HandleSubmit = (e, props) => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    login(user)
      .then((result) => {
        console.log(this.props);
        this.props.history.push("/admin/homepage");
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.Message,
        });
        this.togglewarningModal();
      });
  };
  render() {
    return (
      <>
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.forgetModal}
          toggle={this.closeCollapse}
        >
          <div className="modal-header">
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
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Access Code"
                  type="text"
                  id="forgetpassword"
                  onChange={this.handleAccess}
                />
              </InputGroup>
            </FormGroup>
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
          </div>
        </Modal>
        <Modal
          className="modal-dialog-centered modal-danger"
          contentClassName="bg-gradient-danger"
          isOpen={this.state.warningModal}
          toggle={() => this.toggleModal("notificationModal")}
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
              <h4 className="heading mt-4">You could not login !</h4>
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
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-center text-muted mb-4"></div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
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

                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    type="button"
                    onClick={this.HandleSubmit}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a className="text-light" onClick={this.toggleforgetModal}>
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="http://localhost:3000/auth/register"
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default Login;
