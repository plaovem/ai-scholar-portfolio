import { useEffect, useState } from "react";

type Visitor = {
  lat: number;
  lng: number;
};

export default function LeafletMap() {
  const [visitor, setVisitor] = useState<Visitor | null>(null);

  useEffect(() => {
    const loadLeaflet = () => {
      // @ts-ignore
      const map = L.map("leafletMap", {
        center: [20, 0],
        zoom: 2
      });

      // @ts-ignore
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
      }).addTo(map);

      setTimeout(() => {
        map.invalidateSize();
      }, 100);

      // ✅ 替换为你的真实 token
      fetch("https://ipinfo.io/json?token=f888c8346ea58d")
        .then(res => res.json())
        .then(data => {
          if (!data.loc) {
            console.error("无法获取位置数据，返回内容为：", data);
            return;
          }
          const [lat, lng] = data.loc.split(",").map(Number);
          setVisitor({ lat, lng });

          // @ts-ignore
          L.circleMarker([lat, lng], {
            radius: 10,
            color: "red",
            fillColor: "red",
            fillOpacity: 0.6,
            weight: 1
          }).addTo(map);

          map.setView([lat, lng], 3);
        });
    };

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = loadLeaflet;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div className="relative">
        <div
          id="leafletMap"
          style={{
            width: "33vw",
            height: "25vh",
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: 999
          }}
          className="rounded shadow-lg border"
        />
        <div
          style={{
            position: "fixed",
            bottom: "25vh",
            left: "20px",
            backgroundColor: "rgba(255,255,255,0.9)",
            padding: "6px 12px",
            fontSize: "12px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            zIndex: 1000
          }}
        >
          🌐 当前访客：{visitor ? `${visitor.lat.toFixed(2)}, ${visitor.lng.toFixed(2)}` : "获取中..."}
        </div>
      </div>
    </>
  );
}
