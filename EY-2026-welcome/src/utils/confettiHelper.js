/**
 * Vanilla JS Confetti Generator
 * Creates dynamic <span> confetti elements and attaches CSS keyframe variables.
 */

const CONFETTI_COLORS = [
  '#ffffff', // White
  '#11d3f3', // Cyan
  '#f1c21b', // Gold / Yellow
  '#ffe600', // EY yellow
  '#ff7eb6', // Magenta
  '#33b1ff', // Light Blue
  '#42be65', // Green
  '#ff832b', // Orange
];

export function spawnConfettiBurst(container, count = 85) {
  if (!container) return () => {};

  const spans = [];
  const originX = 50; // center %
  const originY = 50; // center %

  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.className = 'confetti-piece';

    // Particle dimensions & shape
    const width = Math.floor(Math.random() * 8) + 8; // 8px - 15px
    const height = Math.random() > 0.4 ? width * (Math.random() * 0.7 + 0.8) : width * 2;
    const isCircle = Math.random() > 0.75;
    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];

    // Physics parameters (explosion angle + magnitude)
    const angle = Math.random() * Math.PI * 2; // 0 to 360 degrees
    const velocity = Math.random() * 320 + 160; // burst radius (160px - 480px)

    // Burst apex
    const burstX = Math.cos(angle) * velocity;
    const burstY = Math.sin(angle) * (velocity * 0.8) - (Math.random() * 120 + 80); // upward bias

    // Gravity fall trajectory
    const fallX = burstX * (1.1 + Math.random() * 0.3);
    const fallY = burstY + (Math.random() * 250 + 200);

    // End trajectory
    const endX = fallX + (Math.random() * 60 - 30);
    const endY = fallY + (Math.random() * 300 + 250);

    // Rotations
    const rotMid = `${Math.floor(Math.random() * 720 - 360)}deg`;
    const rotFall = `${Math.floor(Math.random() * 1080 - 540)}deg`;
    const rotEnd = `${Math.floor(Math.random() * 1440 - 720)}deg`;

    // Animation timing
    const duration = (Math.random() * 1.5 + 2.5).toFixed(2); // 2.5s - 4.0s
    const delay = (Math.random() * 0.3).toFixed(2); // 0s - 0.3s

    // Set styles & CSS variables
    span.style.width = `${width}px`;
    span.style.height = `${height}px`;
    span.style.backgroundColor = color;
    span.style.borderRadius = isCircle ? '50%' : '2px';
    span.style.left = `${originX}%`;
    span.style.top = `${originY}%`;

    span.style.setProperty('--tx-burst', `${burstX.toFixed(1)}px`);
    span.style.setProperty('--ty-burst', `${burstY.toFixed(1)}px`);
    span.style.setProperty('--tx-fall', `${fallX.toFixed(1)}px`);
    span.style.setProperty('--ty-fall', `${fallY.toFixed(1)}px`);
    span.style.setProperty('--tx-end', `${endX.toFixed(1)}px`);
    span.style.setProperty('--ty-end', `${endY.toFixed(1)}px`);

    span.style.setProperty('--rot-mid', rotMid);
    span.style.setProperty('--rot-fall', rotFall);
    span.style.setProperty('--rot-end', rotEnd);

    span.style.animationDuration = `${duration}s`;
    span.style.animationDelay = `${delay}s`;

    container.appendChild(span);
    spans.push(span);
  }

  // Cleanup helper
  const cleanup = () => {
    spans.forEach((span) => {
      if (span.parentNode === container) {
        container.removeChild(span);
      }
    });
  };

  return cleanup;
}
