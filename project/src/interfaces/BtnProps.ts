import React from "react"

interface BtnProps {
  children: React.ReactNode
  onClick: () => void
  title: string
  disabled?: boolean
}

export default BtnProps
