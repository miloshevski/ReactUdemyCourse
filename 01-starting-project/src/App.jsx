import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header.jsx";
import TapButton from "./components/TapButton.jsx";
import { CORE_CONCEPTS } from "./data";
function App() {
  function handleSelect() {
    console.log("Mrnjau");
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={handleSelect}>Components</TapButton>
            <TapButton onSelect={handleSelect}>JSX</TapButton>
            <TapButton onSelect={handleSelect}>State</TapButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
