import Button from "./components/ui/Button";

function App() {
  return (
    <div className="flex flex-col mx-auto justify-center items-center">
      <div>
        <h1 className="mr-3"> Hello Bangladesh</h1>
        <h2 className="mr-3">Hello Duniya</h2>
        <h3>Hello World!</h3>
      </div>
      <div>
        <button className="btn btn-primary">Primary</button>

        <button className="btn btn-danger">Danger</button>
      </div>
      <br />
      <div className="border border-purple-500 w-96 p-10">
        <Button variant="outline" />
      </div>
    </div>
  );
}

export default App;
