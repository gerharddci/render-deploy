import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <h1>Welcome to my Portfolio</h1>
        <p>Check it out the{" "} 
        <Link to="/about">About</Link>!</p>
        page!
    </div>
  )
}
