import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Table } from "antd";

const UserTable = ({ data, onRowClick }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Details",
      dataIndex: "details",
      render: (text, record) => (
        <Link to={{ pathname: `details/${record.id}`, state: record }}>
          details
        </Link>
      ),
      key: "details",
    },
  ];
  return (
    <Row>
      <Col span={16} offset={4}>
        <Table locale={{ emptyText: 'No data' }}
          dataSource={data}
          columns={columns}
          rowKey="id"
        />
      </Col>
    </Row>
  );
};

export default UserTable;
