'use client';
import React, { useState, useEffect } from 'react'

interface CheckinRecord {
  name: string;
  content: string;
  timestamp: string;
  flowers: number;
}

export default function CheckinPage() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [records, setRecords] = useState<CheckinRecord[]>([]);

  useEffect(() => {
    const storedRecords = localStorage.getItem('checkinRecords');
    if (storedRecords) {
      setRecords(JSON.parse(storedRecords));
    }
  }, []);

  const handleCheckin = () => {
    if (name && content) {
      const newRecord: CheckinRecord = {
        name,
        content,
        timestamp: new Date().toLocaleString(),
        flowers: Math.floor(Math.random() * 5) + 1, // 随机生成1-5朵花
      };
      const updatedRecords = [newRecord, ...records];
      setRecords(updatedRecords);
      localStorage.setItem('checkinRecords', JSON.stringify(updatedRecords));
      setName('');
      setContent('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">打卡系统</h1>
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="输入你的名字"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="输入打卡内容"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleCheckin}
          className="bg-blue-500 text-white p-2 rounded"
        >
          打卡
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">打卡记录</h2>
        {records.map((record, index) => (
          <div key={index} className="border-b py-2">
            <p>
              <strong>{record.name}</strong> - {record.timestamp}
            </p>
            <p>{record.content}</p>
            <p>{'🌸'.repeat(record.flowers)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
