import { useEffect, useState } from "react";
import Joke from "./Component/Joke/Joke.component";
import Footer from "./Component/Footer/Footer.component";

const App = () => {
  const [joke, setJoke] = useState({});
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    setIsPending(true);
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((result) => {
        setIsPending(false);
        setJoke(result);
      });
  };

  const onGetJoke = () => {
    getJoke();
  };

  return (
    <div className="container">
      {!isPending && <Joke joke={joke} onGetJoke={onGetJoke} />}

      <Footer />
    </div>
  );
};

export default App;
