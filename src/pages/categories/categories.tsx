import React, { useContext } from "react";
import { ReducerContext } from "../../use-context/reducer-context";
import { Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const Categories = () => {
  const { state }: any = useContext(ReducerContext);

  return (
    <div>
      <Typography.Title level={2} className={"text-5xl py-5"}>
        All Categories
      </Typography.Title>
      {state?.categories.length > 0 && (
        <div className={"flex flex-wrap gap-3"}>
          <Row gutter={[16, 16]}>
            {state?.categories.map((category: any) => (
              <Col key={category.id} sm={4} md={8} lg={4}>
                <Link to={`/categories/${category.slug}`}>
                  <Card
                    cover={
                      <img
                        src={`https://picsum.photos/seed//300/300?random${category}`}
                        alt={category.name}
                        className={"w-full  object-contain"}
                      />
                    }
                  >
                    <Card.Meta
                      title={category.name}
                      description={category.description}
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Categories;
