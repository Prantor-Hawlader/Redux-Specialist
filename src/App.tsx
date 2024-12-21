function App() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex border border-purple-300 p-10 bg-cyan-200">
        <button className="px-3 py-2 text-white bg-green-500 rounded-md font-semibold text-xl">
          Increment
        </button>
        <h1 className="text-3xl mx-10">0</h1>
        <button className="px-3 py-2 text-white bg-red-500 rounded-md font-semibold ">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
