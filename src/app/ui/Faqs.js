"use client"

import { useState } from "react";
import { Container,Accordion } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faqs = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleIcon = (key) =>
    activeKey === key ? <FaMinus className="ms-auto" /> : <FaPlus className="ms-auto" />;

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const faqs = [
    "What is Lorem Ipsum?",
    "Why do we use it?",
    "Where does it come from?",
    "Where can I get some?",
    "Is Lorem Ipsum safe to use?",
    "Can I customize the dummy text?",
  ];

  return (
    <Container >
    <Accordion activeKey={activeKey} className="accordion-custom ">
      {faqs.map((question, index) => (
        <Accordion.Item eventKey={index.toString()} key={index} className="accordion-custom rounded-3 mb-3">
          <Accordion.Header onClick={() => handleToggle(index.toString())} className="accordion-custom">
            <span >{question}</span>
            {toggleIcon(index.toString())}
          </Accordion.Header>
          <Accordion.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          It has been the industry&#39;s standard dummy text since the 1500s.
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    </Container>
  );
};

export default Faqs;
