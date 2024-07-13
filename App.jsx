import { useState } from "react";
import { databases } from "./appwrite/config";
import { useEffect } from "react";
import { ID } from "appwrite";
function App() {
  const [data, setData] = useState([]);
  const id = ID.unique();
  useEffect(function () {
    const init = async () => {
      const res = await databases.listDocuments(
        "668e484a003da8fb7fb3",
        "668e48580038ab2cda6f"
      );

      setData(res.documents);
    };
    init();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.x.value;

    const res = await databases.createDocument(
      "668e484a003da8fb7fb3",
      "668e48580038ab2cda6f",
      id,
      { name: value }
    );

    setData((prev) => [...prev, res]);
    e.target.reset();
  }
  async function handleDelete(z) {
    const res = await databases.deleteDocument(
      "668e484a003da8fb7fb3",
      "668e48580038ab2cda6f",
      z
    );
    const final = data.filter((curr) => {
      return z !== curr.$id;
    });
    setData(final);
  }
  return (
    <>
      <div>
        {data &&
          data.map((curr) => {
            return (
              <>
                <p key={curr.$id}>{curr.name}</p>
                <button onClick={() => handleDelete(curr.$id)}>delete</button>
              </>
            );
          })}
        <form onSubmit={handleSubmit}>
          <input type="text" name="x" id="1" placeholder="type......." />
        </form>
      </div>
    </>
  );
}

export default App;
