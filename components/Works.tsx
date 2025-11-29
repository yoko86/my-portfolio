"use client";

import { useState } from "react";
import Image from "next/image";
import App from "next/app";

type TextBlock = {
  type: 'text';
  content: string; // 文章の中身
};

// 画像ブロックの型
type ImageBlock = {
  type: 'image';
  src: string;     // 画像のパス
  alt?: string;    // 画像の説明（任意）
  caption?: string; // 画像下のキャプション（任意）
};

type VideoBlock = {
  type: 'video';
  videoId: string;  // YouTubeの動画ID (URLの v=〇〇 の部分)
  caption?: string; // 動画の説明
};

// ブロックはテキストか画像のどちらか
type ContentBlock = TextBlock | ImageBlock | VideoBlock;

// --- 1. 型定義に 'subCategory' を追加 ---
type Work = {
  id: string;
  title: string;
  category: "engineer" | "creative";
  // クリエイティブの中の細かい分類 (エンジニア作品の場合は null か 'web' 等)
  subCategory?: "illustration" | "design" | "ui" | "app" | "web" | null; 
  image: string;
  gallery: string[]; //ギャラリー用の画像配列 
  tags: string[];
  description: string;
  longDescription?: string; //詳細説明用
  gallerySize?: "landscape" | "vertical" | "square";
  contentBlocks?: ContentBlock[];
};

// --- 2. データ入力（分類を適用） ---
const worksData: Work[] = [
  // === Engineer Items ===
  {
    id: "e1",
    title: "英文チェンソー",
    subCategory: "app",
    category: "engineer",
    gallerySize: "vertical",
    image: "/android_app.jpg",
    gallery: ["/Input_notpaste.png","/camera_toriming.jpg","/camera_aftertoriming.jpg","/detail_top.png","/Tangocho_add_editedlist.png","/Tangocho_List_addworded.png","/Tangocho_List_Flushcard_honyaku.png","/tuuchi.jpg"],
    tags: ["Kotlin", "Android Studio", "git","Figma"],
    description: "大学のグループ開発で作ったアプリです。",
    contentBlocks: [
        {
            type: 'text',
            content: `大学の授業の一環として4人でチームを組み、アプリ開発を行いました。
            \n【設計・プロトタイプ】\nFigmaを用いたUI設計と、Git/SourceTreeによる共同開発環境を構築。\nGoogle ML KitとDeepL APIを用いたプロトタイプを早期に作成し、技術検証を行いました。
            \n【ブラッシュアップ】\nRoomデータベースを用いて様々な機能を実装。随所にアニメーションを追加しUXを向上させました。`
        },
        {
            type: 'image',
            src: '/Figma.png', // もしFigmaの図や構成図があればここに入れると最高です
            alt: 'アプリの画面遷移図',
            caption: 'Figmaで設計した画面'
        },
        {
            type: 'text',
            content: `【工夫したこと】\n・役割分担の最適化：メンバーの得意分野（UI、ロジック、DB）に合わせてタスクを配分。\n・アジャイルな共有：週次の進捗確認とチャットでの即時報告を徹底。\n・Git運用の定着：コンフリクト解消などを通じてチーム開発のフローを確立。`
        },
        {
            type: 'text',
            content: `【苦労したこと】\n・リファクタリング：開発が進むにつれて自身の技術力が向上し、初期コードの問題点に気づくようになりました。途中で大幅にアプリの構成を変更しましたが、結果として品質を大きく向上させることができました。\n・コミュニケーションの重要性：メンバー間での認識のズレを減らすため、言葉だけでなく図解やプロトタイプを用いた合意形成を徹底しました。「作る力」と同じくらい「伝える力」が重要だと学びました。`
        }
        ]
    },
  {
    id: "e2",
    title: "音声認識×逐次学習アプリ",
    subCategory: "app",
    category: "engineer",
    image: "/research_hedder.jpg",
    gallery: ["/finetuning1.png","/finetuning2.png","/finetuning3.png","/finetuning4.png","/finetuning5.png"],
    tags: ["Python", "gradio"],
    description: "研究の一環で作成したアプリです。",
    contentBlocks: [
        {
            type: 'text',
            content: `OpenAIの音声認識モデル「Whisper」を用い、ユーザーが修正した認識結果を即座に学習するWebアプリケーションです。ユーザーの声質や専門用語に対して、使えば使うほど精度が向上するパーソナライズAIを実現しました。
            \n\n 【逐次学習の実装】\n巨大なWhisperモデルの全パラメータを学習するのではなく、PEFTライブラリを用いてLoRA (Low-Rank Adaptation) を適用。これにより、GPUメモリの使用量を抑えつつ、わずか数ステップでの高速な追加学習を実現しました。
            \n【Human-in-the-loopシステムの構築】\nGradioを使用し、音声録音から文字起こし、修正、そして学習開始までをワンストップで行えるインタラクティブなUIを構築しました。
            \n【リアルタイム性の追求】\n修正データを1件ずつ即座にTrainer APIへ渡すパイプラインを構築することで、ユーザーのフィードバックループを回しやすく設計しました。
            `
        },],
  },
  {
    id: "e3",
    title: "Portfolio",
    subCategory: "web",
    category: "engineer",
    image: "/portfolio_header.png",
    gallery: ["/portfolio_header.png"],
    tags: ["Next.js", "Tailwind CSS"],
    description: "このサイト自体も自作です。",
  },
  {
    id: "e4",
    title: "論分子ネットワークアプリ",
    subCategory: "app",
    category: "engineer",
    image: "/ronbunshi.jpg",
    gallery: ["/ronbunshi.jpg"],
    tags: ["HTML", "CSS", "JavaScript","D3.js"],
    description: "論文同士の引用関係を分子のように整理・可視化するアプリです。",
    contentBlocks: [
        {
            type: 'text',
            content: `たくさんの論文を読む中で、引用関係や関連研究を整理するのが大変だと感じたことから、このアプリの開発を思い立ちました。
            
            `
        },],
  },

  // === Creative Items (ここから分類) ===
  // 1. Illustration (MV, 水彩, デジタル)
  {
    id: "c1",
    title: "【片時の軌跡】MV作成",
    category: "creative",
    subCategory: "illustration", // ★ここ
    image: "/orange_katatoki.jpg",
    gallery: ["/orange_katatoki.jpg","/orange_katatoki2.jpg","/katatokinokiseki1.png","/blue_katatoki.jpg","/darkblue_katatoki.jpg","/eki.jpeg","/purple_katatoki.jpg"],
    tags: ["Adobe After Effects", "Clip Studio Paint"],
    description: "楽曲に合わせて映像制作",
    contentBlocks: [
        {
            type: 'text',
            content: `【ストーリー】\n「自分には何もないのではないか」と悩みを抱える少女が、森の中で出会ったおとぎ話にでてきそうな女の子と出会い、遊んでいくうちに、「自分は自分でいいんだ」と気づき、前向きに生きていく。\n\n【意識したこと】\n楽曲の世界観を大切にしつつ、視覚的に引き込まれるような映像表現を心がけました。楽曲のサウンドに合わせて表現を変えることで見てて気持ちいいを目指しました。\n\n【制作過程】\nキャラクターデザインと背景美術をClip Studio Paintで制作し、Adobe After Effectsでアニメーションと映像編集を行いました。特に光の表現や色彩の調整に注力し、楽曲の雰囲気を映像で効果的に伝えることを目指しました。
            `
        },
        {
            type: 'video',
            videoId: 'IH-hnj60sTI',
            caption: '片時の軌跡【星界】 MV'
        },
    ],
  },
  {
    id: "c2",
    title: "水彩画",
    category: "creative",
    gallerySize: "square",
    subCategory: "illustration", // ★ここ
    image: "/transparent.jpg",
    gallery: ["/monet1.jpeg","/monet2.jpeg","/monet3.jpeg","/monet4.jpeg"],
    tags: ["透明水彩","顔彩","クレヨン","色鉛筆"],
    description: "油絵具を使わずにモネの名画の質感を再現",
    contentBlocks: [
        {
            type: 'image',
            src: '/monet1.jpeg',
        },
        {
            type: 'text',
            content: `本作は1906年シカゴ美術館にある『睡蓮』を参考にしました。水面は透明水彩を重ねることで、奥行きのある綺麗な青を表現し、睡蓮をクレヨンで描くことで有機物と無機物の対比を表現しました。クレヨンでも油絵に近い表現ができるところが気に入っています。`
        },
        {
            type: 'image',
            src: '/monet2.jpeg',
        },
        {
            type: 'text',
            content: `本作は1899年ポーラ美術館にある『睡蓮の池』を参考にしました。`
        },
        {
            type: 'image',
            src: '/monet3.jpeg',
        },
        {
            type: 'text',
            content: `本作は1873年マルモッタン美術館にある『印象・日の出』を参考にしました。私のお気に入りの作品です。空のグラデーションを透明水彩で表現することでより柔らかい印象に、太陽とその反射をクレヨンで描くことで、光の強さを表現しました。`
        },
        {
            type: 'image',
            src: '/monet4.jpeg',
        },
        {
            type: 'text',
            content: `本作は1887年国立西洋美術館にある『船遊び』を参考にしました。水面の反射を白銀色の顔彩で描き、色鉛筆で仕上げることで絵全体が柔らかい印象になりました。`
        },
    ],
  },
  
  // 2. Graphic Design (カード, ポスター)
  {
    id: "c3",
    title: "Message Card",
    category: "creative",
    subCategory: "design", // ★ここ
    image: "/messagecard1.png",
    gallery: ["/messagecard1.png","/Messagecard1-3.jpg","/Messagecard2.jpg"],
    tags: ["Clip Studio Paint"],
    description: "メッセージカードデザイン制作",
    contentBlocks: [
        {
            type: 'image',
            src: '/messagecard1.png',
        },
        {
            type: 'text',
            content: `入れて欲しいモチーフや色味をヒアリングし、デザインしました。`
        },
        {
            type: 'image',
            src: '/messagecard1-3.png',
        },
        {
            type: 'text',
            content: `深緑色を基調に、綺麗系と可愛い系の中間で、モチーフとして蝶、ティアラ、ダリアを入れて欲しいとのことでしたので、それらを組み合わせてデザインしました。`
        },
        {
            type: 'image',
            src: '/messagecard2.jpg',
        },
    ],
  },
  {
    id: "c4",
    title: "Event Poster",
    category: "creative",
    subCategory: "design", // ★ここ
    image: "/kotohukikai1.png",
    gallery: ["/kotohukikai1.png","/kotohukikai2.png"],
    tags: ["procreate", "Typography"],
    description: "イベント告知ポスター",
  },

  // 3. UI & Assets (アイコン)
  {
    id: "c5",
    title: "MVイラスト",
    category: "creative",
    subCategory: "illustration", // ★ここ
    image: "/sou3.png",
    gallery: ["/chainso.jpeg","/sou2.png","/sou3.png","/nai1.png","/irai.png"],
    tags: ["Clip Studio Paint","Procreate"],
    description: "楽曲に合わせてイラスト制作",
  },
];

export default function Works() {
  const [activeTab, setActiveTab] = useState<"engineer" | "creative">("engineer");
  
  // クリエイティブタブ選択時のみ使うサブフィルター ('all' は全て表示)
  const [activeSubFilter, setActiveSubFilter] = useState<"all" | "illustration" | "design" | "ui">("all");
  const [activeSubFilter2, setActiveSubFilter2] = useState<"all" | "app" | "web">("all");

  const [selectedWorkId, setSelectedWorkId] = useState<string | null>(null);

  // フィルタリングロジック
  const filteredWorks = worksData.filter((work) => {
    // 1. まず大カテゴリー（Engineer/Creative）で分ける
    if (work.category !== activeTab) return false;

    // 2. Creativeの場合のみ、サブフィルターを適用
    if (activeTab === "creative" && activeSubFilter !== "all") {
      return work.subCategory === activeSubFilter;
    }

    if (activeTab === "engineer" && activeSubFilter2 !== "all") {
      return work.subCategory === activeSubFilter2;
    }

    return true;
  });

  const selectedWork = worksData.find((w) => w.id === selectedWorkId);

  return (
    <section id="works" className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-10 tracking-widest text-center text-blue-900">WORKS</h2>

        {/* --- 大タブ（Engineer / Creative） --- */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200 flex">
            <button
              onClick={() => { 
                setActiveTab("engineer"); 
                setActiveSubFilter("all"); // タブを変えたらフィルタをリセット
                setSelectedWorkId(null); 
              }}
              className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === "engineer" ? "bg-blue-600 text-white shadow-md" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              ENGINEER
            </button>
            <button
              onClick={() => { 
                setActiveTab("creative"); 
                setSelectedWorkId(null); 
              }}
              className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === "creative" ? "bg-pink-500 text-white shadow-md" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              CREATIVE
            </button>
          </div>
        </div>

        {/* --- サブフィルター（Creative選択時のみ表示） --- */}
        {activeTab === "creative" && (
          <div className="flex justify-center mb-8 gap-4 flex-wrap animate-fade-in-up">
            {[
              { id: "all", label: "All" },
              { id: "illustration", label: "Illustration" },
              { id: "design", label: "Graphic Design" },
              { id: "ui", label: "UI / Icons" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveSubFilter(filter.id as any)}
                className={`text-sm px-4 py-1 rounded-full border transition-colors ${
                  activeSubFilter === filter.id
                    ? "bg-pink-100 text-pink-700 border-pink-200 font-bold"
                    : "bg-white text-gray-500 border-gray-200 hover:border-pink-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}

        {activeTab === "engineer" && (
          <div className="flex justify-center mb-8 gap-4 flex-wrap animate-fade-in-up">
            {[
              { id: "all", label: "All" },
              { id: "app", label: "App" },
              { id: "web", label: "Web" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveSubFilter2(filter.id as any)}
                className={`text-sm px-4 py-1 rounded-full border transition-colors ${
                  activeSubFilter2 === filter.id
                    ? "bg-blue-100 text-blue-600 border-blue-200 font-bold"
                    : "bg-white text-gray-500 border-gray-200 hover:border-blue-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}  

        {/* --- 作品一覧 --- */}
        <div className="relative mb-12">
          {filteredWorks.length > 0 ? (
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory px-4 scrollbar-hide">
              {filteredWorks.map((work) => (
                <div
                  key={work.id}
                  onClick={() => setSelectedWorkId(work.id)}
                  className={`
                    flex-shrink-0 w-[300px] md:w-[400px] snap-center 
                    cursor-pointer transition-all duration-300 transform 
                    ${selectedWorkId === work.id ? "scale-105 ring-4 ring-blue-200" : "hover:scale-102 hover:opacity-90"}
                  `}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col">
                    <div className="relative h-48 w-full bg-gray-200">
                      <Image src={work.image} alt={work.title} fill className="object-cover" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-lg mb-1">{work.title}</h3>
                      
                      {/* サブカテゴリがある場合はバッジを表示 */}
                      {work.subCategory && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-pink-500 bg-pink-50 px-2 py-0.5 rounded mr-2">
                          {work.subCategory}
                        </span>
                      )}

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                            {work.description}
                        </p>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        {work.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-500">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-400">
              該当する作品がありません
            </div>
          )}
          
          <p className="text-center text-xs text-gray-400 mt-[-20px]">← Scroll or Swipe →</p>
        </div>

        {/* --- 詳細表示エリア --- */}
        {selectedWork && (
          // 1. 背景の黒い膜（クリックすると閉じる）
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedWorkId(null)}
            ></div>

            {/* 2. メインの白い詳細カード（スクロール可能） */}
            <div className="relative bg-white w-full max-w-5xl max-h-full rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
              
              {/* ヘッダー部分（閉じるボタン固定） */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white z-10">
                <div>
                   <span className={`text-xs font-bold px-2 py-1 rounded mb-2 inline-block ${selectedWork.category === 'engineer' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'}`}>
                    {selectedWork.category.toUpperCase()} {selectedWork.subCategory && `/ ${selectedWork.subCategory.toUpperCase()}`}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-serif">{selectedWork.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedWorkId(null)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  ✕ Close
                </button>
              </div>

              {/* スクロールする中身エリア */}
              <div className="overflow-y-auto p-6 md:p-10 space-y-8">
                
                {/* メイン画像 */}
                <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                   <Image src={selectedWork.image} alt={selectedWork.title} fill className="object-contain" />
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Summary</h4>
                    <p className="text-gray-700 leading-relaxed">
                    {selectedWork.description}
                    </p>
                </div>

                {/* 解説テキストエリア */}
                {selectedWork.contentBlocks && selectedWork.contentBlocks.length > 0 && (
                <div className="mb-10">
                    <h4 className="text-lg font-bold mb-6 border-l-4 border-gray-800 pl-3">詳細</h4>
                    
                    <div className="space-y-8"> {/* ブロック間の余白 */}
                    {selectedWork.contentBlocks.map((block, index) => {
                        
                        // A. テキストブロックの場合の表示
                        if (block.type === 'text') {
                        return (
                            <p key={index} className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {block.content}
                            </p>
                        );
                        }
                        
                        // B. 画像ブロックの場合の表示
                        if (block.type === 'image') {
                        return (
                            <figure key={index} className="my-8">
                            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                                <Image 
                                src={block.src} 
                                alt={block.alt || '作品詳細画像'} 
                                fill 
                                className="object-contain" // 全体が見えるようにcontain
                                />
                            </div>
                            {/* キャプションがある場合のみ表示 */}
                            {block.caption && (
                                <figcaption className="text-center text-sm text-gray-500 mt-2">
                                {block.caption}
                                </figcaption>
                            )}
                            </figure>
                        );
                        }

                        if (block.type === 'video') {
                        return (
                        <figure key={index} className="my-8">
                            {/* YouTube埋め込み */}
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md border border-gray-100 bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${block.videoId}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
                            </div>
                            
                            {/* キャプション & YouTubeへのリンクボタン */}
                            <div className="flex flex-col items-center mt-3 gap-2">
                            {block.caption && (
                                <figcaption className="text-sm text-gray-500">{block.caption}</figcaption>
                            )}
                            {/* YouTubeで見るボタン（任意） */}
                            {/* <a 
                                href={`https://www.youtube.com/watch?v=${block.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-red-600 border border-red-200 bg-red-50 px-3 py-1 rounded-full hover:bg-red-100 transition-colors flex items-center"
                            >
                                ▶ YouTubeで直接見る
                            </a> */}
                            </div>
                        </figure>
                        );
                    }

                        return null; // 万が一他のタイプが来たら何も表示しない
                    })}
                    </div>
                </div>
                )}

                {/* ギャラリー（複数画像がある場合のみ表示） */}
                {selectedWork.gallery && selectedWork.gallery.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold mb-4 border-l-4 border-gray-800 pl-3">Gallery</h4>
                    <div className={`grid gap-4 ${
                        selectedWork.gallerySize === "vertical" || selectedWork.gallerySize === "square"
                            ? "grid-cols-2 md:grid-cols-5" // 縦長・正方形なら2〜3列
                            : "grid-cols-1"                // 横長なら1列ドカンと表示
                        }`}>
                      {selectedWork.gallery.map((img, index) => {
        
                        // 比率クラスを動的に決める変数
                        let aspectClass = "aspect-video"; // デフォルトは横長(16:9)

                        if (selectedWork.gallerySize === "vertical") {
                        aspectClass = "aspect-[9/18]"; // 縦長 (3:4) ※スマホ画面なら aspect-[9/16] でもOK
                        } else if (selectedWork.gallerySize === "square") {
                        aspectClass = "aspect-square"; // 正方形 (1:1)
                        }

                        return (
                        <div 
                            key={index} 
                            // ★ここで aspectClass を適用！
                            className={`relative w-full ${aspectClass} rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm`}
                        >
                            {/* object-cover: 枠いっぱいに表示（端が切れる）
                            object-contain: 全体を表示（余白ができる）
                            */}
                            <Image 
                            src={img} 
                            alt={`Gallery ${index}`} 
                            fill 
                            className="object-cover hover:scale-105 transition-transform duration-500" 
                            />
                        </div>
                        );
                    })}
                    </div>
                </div>
                )}
                
                {/* 使用技術・タグ */}
                <div className="pt-8 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">Technologies / Tools</p>
                  <div className="flex flex-wrap gap-2">
                     {selectedWork.tags.map(tag => (
                       <span key={tag} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}