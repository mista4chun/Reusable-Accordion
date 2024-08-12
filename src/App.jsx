import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="container mx-auto max-w-2xl">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          num={i}
          key={el.title}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title="Test 1"
        num={12}
        key="Test 1"
        curOpen={curOpen}
        setCurOpen={setCurOpen}
      >
        John Wick chapter 3 Parabellum <span>🪽️🫠️</span>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ title, num, curOpen, setCurOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    // Already opened in this case
    setCurOpen(isOpen ? null : num);
  }
  return (
    <div
      className={`m-4 cursor-pointer border p-4 shadow-lg ${isOpen ? "border-t-4 border-t-green-600 text-green-600" : ""}`}
      onClick={handleToggle}
    >
      <div className="grid h-fit grid-cols-[auto_1fr_auto] gap-4 text-lg font-semibold">
        <p
          className={`font-semibold ${isOpen ? "text-green-600" : "text-gray-400"} `}
        >
          {" "}
          {num < 9 ? `0${num + 1}` : num + 1}
        </p>
        <p>{title}</p>
        <p>{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <div className="p-8 text-gray-900">{children}</div>}
    </div>
  );
}
