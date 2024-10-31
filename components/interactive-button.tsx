'use client'

import { Button } from "@/components/ui/button"

interface InteractiveButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export function InteractiveButton({ onClick, children }: InteractiveButtonProps) {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  )
}