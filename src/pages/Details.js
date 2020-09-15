import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import sprite from "../svgs/sprite.svg";

const Details = ({ location }) => {
  const { state } = location;
  return (
    <div>
      <Row>
        <Col span={8} offset={8}>
          <Card>
            <img src={state.avatar} alt="avatar" />
            <h1>
              {state.first_name} {state.last_name}
            </h1>
            <p>
              <svg>
                <use href={sprite + "#icon-office"}></use>
              </svg>
              {state.city}
            </p>
            <p>
              <svg>
                <use href={sprite + "#icon-envelop"}></use>
              </svg>
              {state.email}
            </p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="user-info" span={12} offset={6}>
          <h2>
            <svg>
              <use href={sprite + "#icon-quotes-left"}></use>
            </svg>
            {state.slogan}
          </h2>
          <div className="bio">
            <h2>Biography</h2>
            <p>{state.bio}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Link to="/">&larr; Back</Link>
        </Col>
      </Row>
    </div>
  );
};

export default Details;
