import { Button, Card, Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReducerContext } from "../use-context/reducer-context";
import axios from "axios";

const Category = () => {
  const context = useContext(ReducerContext);

  return (
    <div className="mt-16">
      <div className={"py-12"}>
        <div className={"flex items-center justify-between w-full"}>
          <h1 className={"text-2xl font-bold"}>Category</h1>
          <Link to={"/categories"}>
            <Button type={"link"}>View all</Button>
          </Link>
        </div>
        <Row gutter={[16, 16]}>
          {context?.state.categories
            .slice(0, 6)
            .map((category: Record<string, any>) => (
              <Col key={category.id} span={12} sm={12} md={8} lg={4}>
                <Card
                  cover={
                    <img
                      src={"https://picsum.photos/" + category.id + "/300/300"}
                      alt={category.name}
                      className={"w-full  object-contain mt-5"}
                    />
                  }
                >
                  <Card.Meta
                    title={category.name}
                    description={category.description}
                  />
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default Category;
