
import Posts from "./components/Posts"

export const revalidate = 10

export default function Home() {
  return (
    <main className="lg:px-8">
        <Posts />
    </main>
  )
}
