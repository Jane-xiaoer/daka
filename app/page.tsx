import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">欢迎来到打卡系统</h1>
      <p className="mb-4">这是一个简单的打卡系统，你可以在这里记录你的日常活动。</p>
      <Link href="/checkin" className="bg-blue-500 text-white p-2 rounded">
        开始打卡
      </Link>
    </div>
  )
}
