// 'use client';
// import { useEffect, useState } from 'react';
// import { client } from '@/lib/apollo-client';
// import { gql } from '@apollo/client';

// const GET_TEST = gql`
//   query GetTest {
//     test
//   }
// `;

// export default function Home() {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     client.query({ query: GET_TEST })
//       .then(res => setData(res.data.test));
//   }, []);

//   return (
//     <main className="p-10">
//       <h1>Backend-ээс ирсэн: <span className="font-bold text-blue-500">{data}</span></h1>
//     </main>
//   );
// }