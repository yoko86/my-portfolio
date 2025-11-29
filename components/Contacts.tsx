export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4 tracking-widest text-blue-900">CONTACT</h2>
          {/* <p className="text-gray-600 leading-relaxed">
            ほかの制作物や詳細は以下のSNSに載せております。<br/>
            <span className="text-sm text-gray-400"></span>
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* ==================================================
              LEFT: ENGINEERING CONTACT (技術・就活)
             ================================================== */}
          <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-600 rounded-full mr-3"></span>
              Engineering
              {/* <span className="ml-auto text-xs font-normal text-blue-600 bg-white px-3 py-1 rounded-full shadow-sm">
                For Recruiters / Devs
              </span> */}
            </h3>

            <div className="space-y-4">
              {/* GitHub */}
              <a 
                href="https://github.com/yoko86" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 mr-4 text-gray-700 group-hover:text-black">
                  {/* GitHub Icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">GitHub</div>
                  <p className="text-xs text-gray-500 mt-1">開発したアプリのソースコードや、研究のリポジトリを載せています。</p>
                </div>
              </a>

              {/* Engineer Email */}
              <a 
                href="mailto:engineer.job@example.com" 
                className="flex items-start p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 mr-4 text-gray-400 group-hover:text-blue-500">
                  {/* Mail Icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Email</div>
                  <p className="text-xs text-gray-500 mt-1">就職やインターンシップに関するご連絡はこちらへ。</p>
                </div>
              </a>
            </div>
          </div>

          {/* ==================================================
              RIGHT: CREATIVE CONTACT (制作・依頼)
             ================================================== */}
          <div className="bg-pink-50/50 rounded-3xl p-8 border border-pink-100">
            <h3 className="text-xl font-bold text-pink-900 mb-6 flex items-center">
              <span className="w-2 h-6 bg-pink-500 rounded-full mr-3"></span>
              Creative
              {/* <span className="ml-auto text-xs font-normal text-pink-600 bg-white px-3 py-1 rounded-full shadow-sm">
                For Clients / Fans
              </span> */}
            </h3>

            <div className="space-y-4">

              {/* Pixiv */}
              <a 
                href="https://www.pixiv.net/users/50640363" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-4 bg-white rounded-xl border border-pink-100 hover:border-pink-400 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 mr-4 flex items-center justify-center font-bold text-xl text-blue-500 bg-gray-50 rounded-lg">P</div>
                <div>
                  <div className="font-bold text-gray-800 group-hover:text-blue-500 transition-colors">Pixiv</div>
                  <p className="text-xs text-gray-500 mt-1">イラスト作品を載せております。</p>
                </div>
              </a>

              {/* Twitter (X) */}
              <a 
                href="https://x.com/yuiren0_0" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-4 bg-white rounded-xl border border-pink-100 hover:border-black hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 mr-4 text-gray-700 group-hover:text-black">
                   {/* X Logo */}
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 group-hover:text-black transition-colors">X (Twitter)</div>
                  <p className="text-xs text-gray-500 mt-1">制作の進捗、スケッチ、日常のつぶやき。</p>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/..." 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-4 bg-white rounded-xl border border-pink-100 hover:border-pink-600 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 mr-4 text-gray-700 group-hover:text-pink-600">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">Instagram</div>
                  <p className="text-xs text-gray-500 mt-1">ビジュアルポートフォリオ。</p>
                </div>
              </a>

              {/* BASE (Shop) - 準備中のため、少し色を薄くして「Coming Soon」をつける */}
              <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100 opacity-70">
                <div className="w-10 h-10 mr-4 text-gray-400">
                   {/* Shopping Bag Icon */}
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-500 flex items-center">
                    BASE Shop
                    <span className="ml-2 text-[10px] bg-gray-200 text-gray-500 px-2 py-0.5 rounded">Coming Soon</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">オリジナルグッズの販売（準備中）。</p>
                </div>
              </div>

              {/* Creative Email */}
              <a 
                href="mailto:lianw7849@gmail.com" 
                className="flex items-start p-4 bg-white rounded-xl border border-pink-100 hover:border-pink-400 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 mr-4 text-gray-400 group-hover:text-pink-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div className="font-bold text-gray-800 group-hover:text-pink-500 transition-colors">Email</div>
                  <p className="text-xs text-gray-500 mt-1">イラスト制作のご依頼、お見積もりのご相談はこちらへ。</p>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}