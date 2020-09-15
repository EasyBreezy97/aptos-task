import React from "react";
import { Input, Select, Row, Col } from "antd";

const { Option } = Select;

const Search = ({ onChange, onSelect, data, uniqueCities }) => {
  return (
    <Row>
      <Col span={8} offset={4}>
        <Input
          placeholder="filter by name, lastname and email "
          onChange={onChange}
        />
      </Col>
      <Col span={8} offset={4}>
        <Select
          style={{ width: 250 }}
          onSelect={onSelect}
          defaultValue="choose city"
        >
          {uniqueCities &&
            uniqueCities.map((city) => {
              return (
                <Option key={city} value={city}>
                  {city}
                </Option>
              );
            })}
        </Select>
      </Col>
    </Row>
  );
};

export default Search;
