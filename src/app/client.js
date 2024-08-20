"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const BootstrapScript = dynamic(
  () => import('bootstrap'),
  { ssr: false }
);

export default function ClientComponent() {
  useEffect(() => {
    BootstrapScript();
  }, []);

  return null;
}
