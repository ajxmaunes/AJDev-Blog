
import Posts from "./components/Posts"
import { useState } from 'react'

export const revalidate = 0

export default function Home() {
  return (
    <div className="">
        <Posts />
    </div>
  )
}
