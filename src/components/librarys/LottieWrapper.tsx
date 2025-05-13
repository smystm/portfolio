'use client'

import dynamic from 'next/dynamic'

const LottieAnimation = dynamic(
  () =>
    import('./LottieAnimation').then((mod) => mod.RocketProg), // اشاره به named export
  { ssr: false, loading: () => <div>صبور باشید...</div> }
);

export function RocketProg() {
  return <LottieAnimation />
}
