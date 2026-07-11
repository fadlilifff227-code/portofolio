'use client'

import React, { useEffect, useRef } from 'react'

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // --- Star Class ---
    interface Star {
      x: number
      y: number
      size: number
      alpha: number
      baseAlpha: number
      blinkSpeed: number
      color: string
    }

    const stars: Star[] = []
    const starCount = 150

    for (let i = 0; i < starCount; i++) {
      const baseAlpha = Math.random() * 0.6 + 0.2
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        blinkSpeed: Math.random() * 0.02 + 0.005,
        color: Math.random() > 0.3 ? '#ffffff' : '#a5f3fc', // White or light cyan
      })
    }

    // --- Shooting Star Class ---
    interface ShootingStar {
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
      active: boolean
      delay: number
    }

    const shootingStars: ShootingStar[] = []
    const shootingStarCount = 4

    const createShootingStar = (): ShootingStar => {
      // Spawn from top or right side
      const spawnFromTop = Math.random() > 0.5
      return {
        x: spawnFromTop ? Math.random() * width : width + 50,
        y: spawnFromTop ? -50 : Math.random() * (height * 0.6),
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 6,
        angle: Math.PI * 0.75 + (Math.random() * 0.1 - 0.05), // ~135 degrees (top-right to bottom-left)
        opacity: 0,
        active: false,
        delay: Math.random() * 300, // delay before starting
      }
    }

    for (let i = 0; i < shootingStarCount; i++) {
      shootingStars.push(createShootingStar())
    }

    // --- Falling Crescent Moon Class ---
    interface CrescentMoon {
      x: number
      y: number
      radius: number
      speed: number
      angle: number
      active: boolean
      cooldown: number
      trail: { x: number; y: number }[]
    }

    const moon: CrescentMoon = {
      x: 0,
      y: 0,
      radius: 18,
      speed: 4,
      angle: Math.PI * 0.75, // falling trajectory (top-right to bottom-left)
      active: false,
      cooldown: 120, // Frames before first spawn
      trail: [],
    }

    const triggerMoonSpawn = () => {
      // Spawn moon off-screen top-right
      const spawnSide = Math.random() > 0.5
      moon.x = spawnSide ? Math.random() * (width * 0.4) + width * 0.5 : width + 50
      moon.y = spawnSide ? -50 : Math.random() * (height * 0.2)
      moon.radius = Math.random() * 6 + 15 // Size range
      moon.speed = Math.random() * 2 + 3.5 // Smooth falling speed
      moon.active = true
      moon.trail = []
    }

    // Draw crescent moon helper
    const drawCrescent = (
      cContext: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      radius: number,
      alpha: number
    ) => {
      cContext.save()
      cContext.translate(cx, cy)
      cContext.rotate(Math.PI * -0.15) // Tilt the moon slightly for aesthetic look

      cContext.beginPath()
      // Outer arc
      cContext.arc(0, 0, radius, -Math.PI / 2, Math.PI / 2, false)
      // Inner arc using bezier curve to form the crescent shape
      cContext.bezierCurveTo(radius * 0.45, radius * 0.5, radius * 0.45, -radius * 0.5, 0, -Math.PI / 2)
      cContext.closePath()

      // Fill with glowing cyan/white gradient
      const gradient = cContext.createRadialGradient(-radius * 0.2, 0, 1, 0, 0, radius)
      gradient.addColorStop(0, `rgba(224, 242, 254, ${alpha})`) // light cyan-blue
      gradient.addColorStop(0.5, `rgba(165, 243, 252, ${alpha * 0.8})`)
      gradient.addColorStop(1, `rgba(6, 182, 212, ${alpha * 0.5})`) // Cyan edge

      cContext.fillStyle = gradient
      cContext.shadowColor = 'rgba(6, 182, 212, 0.6)'
      cContext.shadowBlur = 18
      cContext.fill()
      cContext.restore()
    }

    // --- Animation Loop ---
    const animate = () => {
      ctx.fillStyle = '#020617' // Deep space navy black
      ctx.fillRect(0, 0, width, height)

      // Draw Nebulas / Glowing spaces (ambient gradients)
      // Nebula 1: Top Right (Cyan/Teal)
      const nebula1 = ctx.createRadialGradient(width * 0.8, height * 0.2, 50, width * 0.8, height * 0.2, width * 0.6)
      nebula1.addColorStop(0, 'rgba(6, 182, 212, 0.07)')
      nebula1.addColorStop(0.5, 'rgba(20, 184, 166, 0.03)')
      nebula1.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = nebula1
      ctx.fillRect(0, 0, width, height)

      // Nebula 2: Bottom Left (Blue/Indigo)
      const nebula2 = ctx.createRadialGradient(width * 0.2, height * 0.8, 50, width * 0.2, height * 0.8, width * 0.6)
      nebula2.addColorStop(0, 'rgba(14, 165, 233, 0.06)')
      nebula2.addColorStop(0.5, 'rgba(99, 102, 241, 0.02)')
      nebula2.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = nebula2
      ctx.fillRect(0, 0, width, height)

      // 1. Draw Stars
      stars.forEach((star) => {
        // Blinking logic
        star.alpha += star.blinkSpeed
        if (star.alpha > star.baseAlpha + 0.2 || star.alpha > 1) {
          star.blinkSpeed = -star.blinkSpeed
        } else if (star.alpha < star.baseAlpha - 0.2 || star.alpha < 0.1) {
          star.blinkSpeed = Math.abs(star.blinkSpeed)
        }

        ctx.fillStyle = star.color
        ctx.globalAlpha = star.alpha
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1.0 // Reset opacity

      // 2. Draw & Update Shooting Stars
      shootingStars.forEach((star, index) => {
        if (!star.active) {
          if (star.delay > 0) {
            star.delay--
          } else {
            star.active = true
          }
          return
        }

        // Draw trail
        const endX = star.x - Math.cos(star.angle) * star.length
        const endY = star.y - Math.sin(star.angle) * star.length

        const starGrad = ctx.createLinearGradient(star.x, star.y, endX, endY)
        starGrad.addColorStop(0, 'rgba(165, 243, 252, 1.0)') // cyan-white head
        starGrad.addColorStop(0.1, 'rgba(6, 182, 212, 0.8)')
        starGrad.addColorStop(0.5, 'rgba(8, 145, 178, 0.3)')
        starGrad.addColorStop(1, 'rgba(8, 145, 178, 0)') // Fading tail

        ctx.strokeStyle = starGrad
        ctx.lineWidth = 1.8
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(endX, endY)
        ctx.stroke()

        // Move shooting star
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed

        // If out of bounds, recreate
        if (star.x < -100 || star.y > height + 100) {
          shootingStars[index] = createShootingStar()
        }
      })

      // 3. Draw & Update Falling Crescent Moon
      if (moon.active) {
        // Record trail
        moon.trail.push({ x: moon.x, y: moon.y })
        if (moon.trail.length > 25) {
          moon.trail.shift()
        }

        // Draw moon trail
        moon.trail.forEach((pos, idx) => {
          const trailAlpha = (idx / moon.trail.length) * 0.15
          drawCrescent(ctx, pos.x, pos.y, moon.radius, trailAlpha)
        })

        // Draw current moon
        drawCrescent(ctx, moon.x, moon.y, moon.radius, 0.95)

        // Move moon
        moon.x += Math.cos(moon.angle) * moon.speed
        moon.y += Math.sin(moon.angle) * moon.speed

        // If offscreen, deactivate and start cooldown
        if (moon.x < -100 || moon.y > height + 100) {
          moon.active = false
          moon.trail = []
          moon.cooldown = Math.random() * 400 + 400 // 8 to 15 seconds cooldown
        }
      } else {
        if (moon.cooldown > 0) {
          moon.cooldown--
        } else {
          triggerMoonSpawn()
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}
