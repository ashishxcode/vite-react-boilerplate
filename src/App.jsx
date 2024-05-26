const App = () => {
    return (
        <div className="flex h-svh flex-col items-center justify-center space-y-4 bg-slate-950 text-slate-100">
            <h1 className="space-x-2 text-4xl font-bold">
                <span className="inline-block bg-gradient-to-b from-pink-600  to-indigo-400 bg-clip-text text-transparent">
                    Vite
                </span>
                <span>+</span>
                <span className="inline-block bg-gradient-to-b from-blue-600  to-indigo-400 bg-clip-text text-transparent">
                    React
                </span>
                <span>+</span>
                <span className="inline-block bg-gradient-to-b from-slate-100  to-slate-400 bg-clip-text text-transparent">
                    ShadCN
                </span>
            </h1>

            <p className="font-medium ">
                Get started by editing <code>src/App.jsx</code>
            </p>
        </div>
    );
};

export default App;
