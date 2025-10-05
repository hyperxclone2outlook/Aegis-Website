import { useEffect, useRef } from 'react';

export default function AnimatedShield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    let animationFrame: number;
    let time = 0;

    const particles: Array<{
      x: number;
      y: number;
      speed: number;
      angle: number;
      radius: number;
      color: string;
    }> = [];

    for (let i = 0; i < 20; i++) {
      particles.push({
        x: centerX,
        y: centerY,
        speed: 0.5 + Math.random() * 0.5,
        angle: (Math.PI * 2 * i) / 20,
        radius: 80 + Math.random() * 40,
        color: ['#06b6d4', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)],
      });
    }

    const drawShield = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const shieldPath = new Path2D();
      shieldPath.moveTo(centerX, centerY - 150);
      shieldPath.lineTo(centerX + 140, centerY - 90);
      shieldPath.lineTo(centerX + 140, centerY + 20);
      shieldPath.quadraticCurveTo(centerX + 140, centerY + 100, centerX, centerY + 150);
      shieldPath.quadraticCurveTo(centerX - 140, centerY + 100, centerX - 140, centerY + 20);
      shieldPath.lineTo(centerX - 140, centerY - 90);
      shieldPath.closePath();

      const gradient = ctx.createLinearGradient(centerX - 140, centerY - 150, centerX + 140, centerY + 150);
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.1)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fill(shieldPath);

      const glowGradient = ctx.createLinearGradient(centerX - 140, centerY - 150, centerX + 140, centerY + 150);
      glowGradient.addColorStop(0, '#06b6d4');
      glowGradient.addColorStop(0.5, '#8b5cf6');
      glowGradient.addColorStop(1, '#ec4899');

      ctx.strokeStyle = glowGradient;
      ctx.lineWidth = 2 + Math.sin(t * 0.002) * 0.5;
      ctx.shadowBlur = 15 + Math.sin(t * 0.002) * 5;
      ctx.shadowColor = '#06b6d4';
      ctx.stroke(shieldPath);

      ctx.shadowBlur = 0;

      const circuitLines = [
        { x1: centerX - 80, y1: centerY - 80, x2: centerX - 20, y2: centerY - 80 },
        { x1: centerX + 20, y1: centerY - 80, x2: centerX + 80, y2: centerY - 80 },
        { x1: centerX - 80, y1: centerY, x2: centerX - 40, y2: centerY },
        { x1: centerX + 40, y1: centerY, x2: centerX + 80, y2: centerY },
        { x1: centerX - 60, y1: centerY + 60, x2: centerX - 30, y2: centerY + 60 },
        { x1: centerX + 30, y1: centerY + 60, x2: centerX + 60, y2: centerY + 60 },
        { x1: centerX, y1: centerY - 100, x2: centerX, y2: centerY - 60 },
        { x1: centerX, y1: centerY + 40, x2: centerX, y2: centerY + 80 },
      ];

      circuitLines.forEach((line, index) => {
        const offset = (t * 0.001 + index * 0.2) % 1;
        const lineGradient = ctx.createLinearGradient(line.x1, line.y1, line.x2, line.y2);

        lineGradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
        lineGradient.addColorStop(offset, 'rgba(6, 182, 212, 0.8)');
        lineGradient.addColorStop(Math.min(offset + 0.1, 1), 'rgba(139, 92, 246, 0.8)');
        lineGradient.addColorStop(1, 'rgba(236, 72, 153, 0)');

        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        const nodeX = line.x1 + (line.x2 - line.x1) * offset;
        const nodeY = line.y1 + (line.y2 - line.y1) * offset;

        ctx.beginPath();
        ctx.arc(nodeX, nodeY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#06b6d4';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#06b6d4';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      particles.forEach(particle => {
        particle.angle += particle.speed * 0.01;
        const x = centerX + Math.cos(particle.angle) * particle.radius;
        const y = centerY + Math.sin(particle.angle) * particle.radius;

        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      const eyeOuterRadius = 30 + Math.sin(t * 0.003) * 3;
      const eyeGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, eyeOuterRadius);
      eyeGradient.addColorStop(0, 'rgba(6, 182, 212, 0.3)');
      eyeGradient.addColorStop(1, 'rgba(139, 92, 246, 0.1)');

      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 25, 35, 0, 0, Math.PI * 2);
      ctx.fillStyle = eyeGradient;
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 15, 25, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.fill();

      const irisGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 12);
      irisGradient.addColorStop(0, '#06b6d4');
      irisGradient.addColorStop(0.5, '#0891b2');
      irisGradient.addColorStop(1, '#164e63');

      ctx.beginPath();
      ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
      ctx.fillStyle = irisGradient;
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#06b6d4';
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(centerX, centerY, 6 + Math.sin(t * 0.005) * 1, 0, Math.PI * 2);
      ctx.fillStyle = '#0c4a6e';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX - 3, centerY - 3, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fill();

      const scanLineY = centerY - 35 + ((t * 0.05) % 70);
      ctx.beginPath();
      ctx.moveTo(centerX - 25, scanLineY);
      ctx.lineTo(centerX + 25, scanLineY);
      ctx.strokeStyle = `rgba(6, 182, 212, ${0.3 + Math.sin(t * 0.01) * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      for (let i = 0; i < 3; i++) {
        const ringRadius = 50 + i * 25 + Math.sin(t * 0.002 + i) * 5;
        const ringOpacity = 0.15 - i * 0.03;

        ctx.beginPath();
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(6, 182, 212, ${ringOpacity})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    };

    const animate = () => {
      time += 16;
      drawShield(time);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="w-full h-full"
    />
  );
}
