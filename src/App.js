import "./App.css";

function App() {
  return (
    <div className="main m-5 border border-blue-500">
      <p className="text-center p-3 text-5xl font-bold">Login</p>
      <div className="container m-auto p-5 flex justify-center border border-red-500">
        <div className="content inline-grid text-2xl font-bold border-2 border-slate-400 rounded-lg">
          <p className="pb-2">Email</p>
          <input
            className="mb-10 border"
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <p className="pb-2">Password</p>
          <input
            className="border"
            type="text"
            name="password"
            placeholder="******"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
