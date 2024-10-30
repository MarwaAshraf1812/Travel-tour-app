import { useState } from 'react'
import { Button } from './components/ui/button'
import { Calendar } from './components/ui/calendar'

export default function App() {
  const [date, setDate] = useState(new Date())
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500 text-center">Hello world!</h1>
      <Button>Click me!</Button>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </>
  )
}
