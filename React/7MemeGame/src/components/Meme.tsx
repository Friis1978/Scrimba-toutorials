import { useState, useEffect } from "react";

type MemeObj = {
  topText: string;
  bottomText: string;
  randomImage: string;
};

const Meme = () => {
  const defaultMeme: MemeObj = {
    topText: "",
    bottomText: "",
    randomImage: "",
  };

  const [meme, setMeme] = useState<MemeObj>(defaultMeme);
  const [allMemes, setAllMemes] = useState<[]>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMemeImage = (allMemes: any) => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    return allMemes[randomNumber].url;
  };

  /*
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
  */
  useEffect(() => {
    /*fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
          console.log(data.data)
          setAllMemes(data.data.memes)});
    */
    // Or as a async function
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    };
    getMemes();
  }, []);

  useEffect(() => {
    allMemes &&
      setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: getMemeImage(allMemes),
      }));
  }, [allMemes]);

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: getMemeImage(allMemes),
    }));
  };

  const handleChange = (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLTextAreaElement>
      | React.FormEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };

  return (
    <main>
      <form className="form--meme">
        <input
          type="text"
          name="topText"
          onChange={handleChange}
          className="form--meme--input"
          placeholder="top"
        />
        <input
          type="text"
          name="bottomText"
          onChange={handleChange}
          className="form--meme--input"
          placeholder="bottom"
        />
        <button className="form--meme--btn" onClick={(e) => handleClick(e)}>
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <div className="meme--image--wrapper">
          <img className="meme--image" src={meme.randomImage} alt="meme" />
        </div>
        <h2 className="meme--text top text-shadow-meme">{meme.topText}</h2>
        <h2 className="meme--text bottom text-shadow-meme">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
};
export default Meme;
