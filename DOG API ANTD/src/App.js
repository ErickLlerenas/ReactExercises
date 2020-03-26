import React, { useEffect, useState } from "react";
import { Card, Cascader, Row, Col } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;

function App() {
  const options = [
    {
      value: "husky",
      label: "Husky"
    },
    {
      value: "boxer",
      label: "Boxer"
    },
    {
      value: 'beagle',
      label: 'Beagle'
    },
    {
      value: 'chihuahua',
      label: 'Chihuahua'
    }
  ];

  function onChange(value) {
    if(value[0])
    setDogType(value[0]);
  }

  const [dogs, setDogs] = useState([]);
  const [dogType, setDogType] = useState("beagle");

  useEffect(() => {
    const obtenerDatosDeLaAPI = async () => {
      const result = await fetch(`https://dog.ceo/api/breed/${dogType}/images`);
  
      const json = await result.json();
      setDogs(json.message);
    };
    obtenerDatosDeLaAPI();
  }, [dogType]);

  return (
    <div>
      <Cascader options={options} onChange={onChange} />
      <Row>
        {dogs.map((dog, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <Card
              hoverable
              style={{margin:10}}
              cover={<img alt="dog" src={dog} style={{height:300,objectFit:'cover'}}/>}
            >
              <Meta title={dogType.toUpperCase()} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
