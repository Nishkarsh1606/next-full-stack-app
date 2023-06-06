'use client'
import useSWR from 'swr'

const Dashboard = () => {
  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  console.log(data)

  return (
    <div>Hello Dashboard</div>
  )
}

export default Dashboard