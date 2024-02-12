function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-red-50 text-black/60">
      <div
        ref={modal}
        className="mod absolute hidden rounded-lg border-[2px] border-solid border-black/60 bg-white p-16 text-5xl"
      >
        Please wait...
      </div>
      <h1 className="bg-transparent pt-4 text-center  text-5xl">
        Sentiment Analysis
      </h1>
      <hr className="mx-auto mb-8 mt-2 w-[60%]" />
      <p className="mx-auto my-2 w-96 text-center">
        Write some text you wish to analyse:
      </p>
      <div className="flex flex-col items-center justify-center gap-4">
        <textarea
          className="w-[60%] rounded-lg border-[1px] border-solid border-black/60"
          name=""
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <button className="rounded-lg bg-red-100 p-2 font-semibold duration-100 hover:scale-125">
          Analyse
        </button>
      </div>

      <hr className="mx-auto my-4 w-[60%]" />
      <div className="flex justify-center gap-28">
        <div>Sentiment: </div>
        <div>Placeholder</div>
        <div>Score</div>
        <div>Placeholder</div>
      </div>
    </div>
  );
}

export default App;
