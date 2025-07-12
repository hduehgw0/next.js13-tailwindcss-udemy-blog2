// import Link from "next/link";

// const NotFound = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 text-slate-800 px-4">
//       <h1 className="text-6xl font-bold mb-4">404</h1>
//       <p className="text-lg mb-6">お探しのページは見つかりませんでした。</p>
//       <Link
//         href="/"
//         className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//       >
//         ホームに戻る
//       </Link>
//     </div>
//   );
// };

// export default NotFound;

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-[100px] font-extrabold tracking-widest text-red-500 animate-bounce drop-shadow-lg">
        404
      </h1>
      <p className="mt-4 text-2xl md:text-3xl font-semibold">ページが見つかりませんでした。</p>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        アクセスしようとしたページは存在しないか、移動した可能性があります。
      </p>

      <Link
        href="/"
        className="mt-8 inline-block px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-lg font-medium shadow-lg transition duration-300 ease-in-out"
      >
        ホームへ戻る
      </Link>

      <div className="absolute bottom-4 text-sm text-gray-500">
        © 2025 My Next.js App
      </div>
    </div>
  );
};

export default NotFound;

// // app/not-found.tsx
// import Link from "next/link";

// const NotFound = () => {
//   return (
//     <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 text-center">
//       {/* 404 番号 */}
//       <h1 className="text-[120px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-sky-500 animate-pulse">
//         404
//       </h1>

//       {/* メッセージ */}
//       <p className="text-2xl font-semibold mt-2">ページが見つかりません</p>
//       <p className="text-gray-400 mt-2 max-w-md">
//         アクセスしたページは存在しないか、URLが間違っている可能性があります。
//       </p>

//       {/* ボタン */}
//       <Link
//         href="/"
//         className="mt-6 inline-block px-6 py-3 bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-200 transition duration-300"
//       >
//         ホームに戻る
//       </Link>
//     </main>
//   );
// };

// export default NotFound;

