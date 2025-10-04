import { useState } from "react";

const accordionData = [
  {
    id: "A1B2C3",
    header: "Introduction",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text since the 1500s.",
  },
  {
    id: "D4E5F6",
    header: "History",
    content:
      "It originated when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "G7H8I9",
    header: "Usage",
    content:
      "Lorem Ipsum is used as a placeholder text in design, publishing, and typesetting industries for layout visualization.",
  },
  {
    id: "J1K2L3",
    header: "Modern Relevance",
    content:
      "With the advent of digital tools, Lorem Ipsum remains popular in web design and prototyping to simulate readable text.",
  },
  {
    id: "M4N5O6",
    header: "Conclusion",
    content:
      "Despite being centuries old, Lorem Ipsum continues to serve as a simple yet effective filler text for testing layouts.",
  },
];

export const Accordion = () => {
  const [visibleAccordionId, setVisibleAccordionId] = useState(accordionData[0].id);

  const toggleAccordion = (id) => {
    setVisibleAccordionId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ width: "900px", margin: "auto" }}>
      <h2>Accordion</h2>
      {accordionData.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <div
            onClick={() => toggleAccordion(item.id)}
            style={{
              border: "2px solid black",
              borderRadius: "5px",
              textAlign: "left",
              padding: "10px",
              cursor: "pointer",
              backgroundColor: visibleAccordionId === item.id ? "#f0f0f0" : "white",
            }}
          >
            {item.header}
          </div>
          <div
            style={{
              display: visibleAccordionId === item.id ? "block" : "none",
              border: "1px solid #ddd",
              borderTop: "none",
              padding: "10px",
              backgroundColor: "#fafafa",
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
