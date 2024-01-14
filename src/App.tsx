import { useState } from "react";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    setModal((prev) => !prev);
  };

  return (
    <div className="flex flex-col mx-auto justify-center items-center h-screen">
      <br />

      <Button variant="solid" onClick={() => setModal((prev) => !prev)}>
        Open Modal
      </Button>
      <Modal isOpen={modal} onClose={handleClose}>
        <Modal.Header>
          <h3>Title</h3>
          <Modal.CloseButton />
        </Modal.Header>
        <h1>This is modal</h1>
      </Modal>
    </div>
  );
}

export default App;
