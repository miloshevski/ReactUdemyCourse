import TapButton from "./TapButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TapButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}>
          Components
        </TapButton>
        <TapButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}>
          JSX
        </TapButton>
        <TapButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}>
          State
        </TapButton>
      </menu>
      {tabContent}
    </section>
  );
}
