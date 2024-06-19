import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero h-[50vh] bg-primary mt-[4rem] text-primary-content rounded-3xl">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-white">Welcome!</h1>
            <p className="py-6 font-bold">
              Someone wins a billion £ every second, why not you?
            </p>
            <Link className="btn btn-accent" to={"/play"}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
