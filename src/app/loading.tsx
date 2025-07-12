// loading.tsx
const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900">
      <div className="flex space-x-2" role="status" aria-label="読み込み中">
        <span className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default Loading;