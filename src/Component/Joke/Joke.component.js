import "./joke.styles.css";

const Joke = ({ joke = {}, onGetJoke }) => {
  const { value, icon_url, ...rest } = joke;

  console.log(rest);
  return (
    <div className="joke">
      <h1> {value} </h1>
      <p> ~ chuck Norris </p>

      <div className="button-wrapper">
        <button onClick={onGetJoke}>Load More</button>
      </div>
    </div>
  );
};

export default Joke;
