import React from 'react';
import Image from "next/image";
import CookieConsent from "react-cookie-consent";
import VisitorIP from "../components/VisitorIP";
import LeafletMap from "../components/LeafletMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <header className="flex items-center space-x-4">
        <Image src="/profile.jpg" alt="Profile" width={64} height={64} className="rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">李彤</h1>
          <div className="flex space-x-2 text-sm text-blue-600">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=yourid" target="_blank" rel="noreferrer">Google Scholar</a>
            <a href="mailto:your@email.com">Email</a>
          </div>
        </div>
      </header>

      <main className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold">个人简介</h2>
          <p>我是AI领域研究者，研究方向包括多模态大模型、语言模型优化与生成式AI。</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">近期动态</h2>
          <ul className="list-disc ml-5">
            <li>2025年5月：参加 CVPR 2025 并发表论文。</li>
            <li>2025年4月：受邀在清华大学进行LLM专题讲座。</li>
          </ul>
        </section>

        <VisitorIP />
        <LeafletMap />
      </main>

      <footer className="mt-12 text-sm text-gray-500 text-center">
        <p>&copy; 2025 李彤. All rights reserved.</p>
      </footer>

      <CookieConsent>
        本网站使用 Cookie 来提升用户体验。
      </CookieConsent>
    </div>
  );
}
