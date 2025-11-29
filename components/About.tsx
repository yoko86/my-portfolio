export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gray-50">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-serif font-bold mb-8 tracking-widest text-blue-900">ABOUT</h2>
        <p className="text-lg leading-loose text-gray-600 mb-8">
          埼玉大学 情報工学科4年。<br/>
          論理的なエンジニアリングと、感性豊かなクリエイティブ。<br/>
          その二つの領域を行き来できることが私の強みです。<br/>
          {/* <span className="text-sm mt-4 block text-gray-400">
             ※聴覚にハンディキャップがありますが、それをアクセシビリティへの<br/>こだわりという強みに変えて活動しています。
          </span> */}
        </p>
      </div>
    </section>
  );
}