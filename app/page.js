
import Button from "./components/button";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center py-20">

      <h1 className="text-6xl font-bold mb-12">
        Welcome to Agave Shooters Golf Club
      </h1>

      <p className="text-3xl mb-16">
        Join fellow golfers, participate in events,
        <br />
        and stay connected with our golf community.
      </p>

      <Button text="JOIN NOW" />

    </div>
  );
}