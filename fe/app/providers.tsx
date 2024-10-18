// app/providers.tsx
// this is required to use NextUI per the docs @ https://nextui.org/docs/frameworks/nextjs
"use client";

import { NextUIProvider } from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}