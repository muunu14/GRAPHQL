'use client';
import { useState } from 'react';

import { gql } from '@apollo/client';

const GET_TEST = gql`
  query GetTest {
    test
  }
`;

export default function Home() {
  const [data, setData] = useState('');
  return (
    <main className="p-30">
      <h1>Backend <span className=" text-blue-500">{data}</span></h1>
    </main>
  );
}