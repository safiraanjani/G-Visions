import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default App;