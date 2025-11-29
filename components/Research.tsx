export default function Research() {
  return (
    <section id="research" className="min-h-screen bg-white flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-serif font-bold mb-12 tracking-widest text-center text-blue-900">RESEARCH</h2>
        <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">ユーザー誤り訂正による音声認識モデルの逐次学習</h3>
          <p className="leading-relaxed text-gray-700 mb-6">
            日本語を始めとする自然言語では、曖昧な音や同音異義語が多く、音声認識の誤認識を増加させる大きな要因となっています。また、ノイズ・多話者環境でも音声の誤認識が増加します。
            これらの問題を解決するために本研究では、ユーザーが自身の誤認識を訂正・フィードバックし、逐一学習を行うことで、音声認識モデルがそのユーザ専用に賢くなっていくシステムを構築していきます。
          </p>
          <div className="flex gap-2">
             <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Python</span>
             <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">PyTorch</span>
             <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Transformers</span>
             <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">PEFT</span>
          </div>
        </div>
      </div>
    </section>
  );
}