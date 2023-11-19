
import Posts from "./components/Posts"

export const revalidate = 10

export default function Home() {
  return (
    <div className="lg:px-8">
        <Posts />
    </div>
  )
}
