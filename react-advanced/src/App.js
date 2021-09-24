import React, { createRef, useRef, useState } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  const refs = [];

  const data = [
    {
      name: "One",
    },
    {
      name: "Two",
    },
    {
      name: "Three",
    },
    {
      name: "Four",
    },
    {
      name: "Five",
    },
  ];

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop - 200;
    const offsetBottom = offsetTop + height;
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  const handleScroll = (ref) => {
    const scrollPosition = ref.current.scrollTop;
    const selected = refs.find(({ section, innerRef }) => {
      const ele = innerRef.current;
      if (ele) {
        const { offsetBottom, offsetTop } = getDimensions(ele);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
    });
    if (selected && parseInt(selected.section) !== index) {
      setIndex(parseInt(selected.section));
    } else if (!selected && parseInt(index)) {
      setIndex(undefined);
    }
  };

  const parentRef = useRef();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "1000px",
          margin: "50px",
        }}
      >
        {data.map((item, i) => (
          <div
            style={{
              backgroundColor: index === i ? "blue" : "transparent",
              color: index === i ? "white" : "black",
            }}
          >
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
      <div
        style={{
          margin: "50px",
          width: "1000px",
          overflowY: "auto",
          height: "500px",
          border: "1px solid",
        }}
        ref={parentRef}
        onScroll={() => handleScroll(parentRef)}
      >
        {data.map((item, i) => {
          const ref = createRef();
          refs.push({ section: i, innerRef: ref });
          return (
            <div
              style={{
                height: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: i === index ? "blue" : "grey",
                color: i === index ? "white" : "black",
              }}
              key={i}
              ref={ref}
            >
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
