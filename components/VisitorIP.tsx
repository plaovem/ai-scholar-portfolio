
import { useEffect, useState } from 'react';

type IPInfo = {
  ip: string;
  city?: string;
  region?: string;
  country?: string;
};

export default function VisitorIP() {
  const [info, setInfo] = useState<IPInfo | null>(null);

  useEffect(() => {
    fetch('https://ipinfo.io/json?token=f888c8346ea58d')
      .then((res) => res.json())
      .then((data) => {
        setInfo({
          ip: data.ip,
          city: data.city,
          region: data.region,
          country: data.country
        });
      });
  }, []);

  if (!info) return null;

  return (
    <div className="text-sm mt-6 p-4 bg-gray-50 border rounded">
      <p><strong>你的 IP:</strong> {info.ip}</p>
      <p><strong>位置:</strong> {info.city}, {info.region}, {info.country}</p>
    </div>
  );
}
