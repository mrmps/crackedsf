import { CSSProperties } from 'react'

interface LowercaseWrapperProps {
  children: string
  speed?: number
}

export function LowercaseWrapper({ children, speed = 100 }: LowercaseWrapperProps) {
  const words = children.split(/(\s+)/)
  const totalChars = children.length
  const animationDuration = (totalChars * speed) / 10000 // Convert to seconds

  return (
    <span 
      className="inline-block whitespace-pre-wrap break-words font-sans text-base overflow-hidden"
      style={{ 
        '--total-chars': totalChars,
        '--animation-duration': `${animationDuration}s`,
      } as CSSProperties}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((char, charIndex) => {
            const overallIndex = words.slice(0, wordIndex).join('').length + charIndex
            return (
              <span 
                key={charIndex}
                className="inline-block animate-reveal"
                style={{ 
                  '--char-index': overallIndex,
                } as CSSProperties}
              >
                {char}
              </span>
            )
          })}
        </span>
      ))}
    </span>
  )
}