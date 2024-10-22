import { InstagramProfile } from "./components/instagram-profile";

const App = () => {
    return (
        <div>
            <InstagramProfile />
            <div className="container mx-auto px-4 py-8">
                <div className="mx-auto space-y-2 text-center">
                    <span className="text-sm text-muted-foreground">
                        Made with ❤️ by{" "}
                    </span>
                    <a
                        href="https://www.influenzer.ai"
                        className="flex items-center justify-center text-center"
                    >
                        <img
                            src="/public/logo.svg"
                            alt="logo"
                            className="h-10"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default App;
