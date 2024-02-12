import { pipeline, env } from "@xenova/transformers";
import { useState, useRef } from "react";

env.allowLocalModels = false;
env.useBrowserCache = false;

function App() {
  const [textInput, setTextInput] = useState("")
  const [sentiment, setSentiment] = useState("Placeholder");
  const [score, setScore] = useState("Placeholder");
  const modal = useRef(null)

  const handleInput = async () => {
    modal.current.classList.toggle('hidden')
    const pipe = await pipeline('sentiment-analysis');
    const out = await pipe(textInput);
    setSentiment(out[0].label)
    setScore(out[0].score)
    modal.current.classList.toggle('hidden')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-red-50 text-black/60 relative">
      <div ref={modal} className="mod hidden absolute p-16 text-5xl rounded-lg bg-white border-[2px] border-solid border-black/60">Please wait...</div>
      <h1 className="bg-transparent pt-4 text-center  text-5xl">
        Sentiment Analysis
      </h1>
      <hr className="mx-auto mb-8 mt-2 w-[60%]" />
      <p className="mx-auto my-2 w-96 text-center">
        Write some text you wish to analyse:
      </p>
      <div className="flex flex-col items-center justify-center gap-4">
        <textarea
          className="w-[60%] rounded-lg border-[1px] border-solid border-black/60 p-2"
          name="textInput"
          id="textInput"
          cols="30"
          rows="5"
          onChange={(e) => setTextInput(e.target.value)}
        ></textarea>
        <button className="rounded-lg bg-red-100 p-2 font-semibold duration-100 hover:scale-125"
          onClick={handleInput}
        >
          Analyse
        </button>
      </div>

      <hr className="mx-auto my-4 w-[60%]" />
      <div className="flex justify-center gap-28">
        <div>Sentiment: </div>
        {/* Sentiment State */}
        <div>{sentiment}</div>
        <div>Score</div>
        {/* Score State */}
        <div>{score}</div>
      </div>
    </div>
  );
}

export default App;
