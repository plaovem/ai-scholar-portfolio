
import { useEffect, useState } from 'react';

type Paper = {
  title: string;
  authors: string;
  conference: string;
  link: string;
};

export default function Papers() {
  const [data, setData] = useState<{ awards: string[], papers: Paper[] }>({ awards: [], papers: [] });

  useEffect(() => {
    fetch('/data/papers.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6">论文与奖项</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">🏆 奖项</h2>
        <ul className="list-disc ml-5 space-y-1">
          {data.awards.map((award, i) => (
            <li key={i}>{award}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">📄 代表论文</h2>
        <ul className="list-disc ml-5 space-y-4">
          {data.papers.map((paper, i) => (
            <li key={i}>
              <strong>{paper.title}</strong><br />
              {paper.authors}, {paper.conference}. <a className="text-blue-600" href={paper.link}>[PDF]</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
