// Main JavaScript file
console.log('Portfolio loaded');

document.addEventListener('DOMContentLoaded', () => {
  // --- Sprite Sheet Interaction ---
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    const spriteWrapper = card.querySelector('.sprite-wrapper');
    // Only proceed if this card has a sprite sheet
    if (!spriteWrapper) return;

    // Get the number of frames from the inline CSS variable
    // Example: style="--frames: 15;"
    const style = getComputedStyle(spriteWrapper);
    // parseInt of "15" -> 15
    const frames = parseInt(style.getPropertyValue('--frames').trim()) || 15;

    card.addEventListener('mousemove', (e) => {
      // Get dimensions and position of the card
      const rect = card.getBoundingClientRect();
      
      // Calculate mouse X position relative to the card (0 to width)
      const x = e.clientX - rect.left;
      
      // Calculate percentage (0.0 to 1.0)
      // We clamp it to ensure it stays within bounds
      let percentage = x / rect.width;
      if (percentage < 0) percentage = 0;
      if (percentage > 1) percentage = 1;

      // Map percentage to a frame index (0 to frames-1)
      const frameIndex = Math.floor(percentage * frames);
      
      // Ensure frameIndex doesn't exceed the max frame index
      const safeFrameIndex = Math.min(frameIndex, frames - 1);

      // Calculate the background position percentage
      // For N frames, the positions are:
      // Frame 0: 0%
      // Frame N-1: 100%
      // Step: 100 / (N-1)
      const positionPercentage = (safeFrameIndex / (frames - 1)) * 100;

      // Update the background position
      spriteWrapper.style.backgroundPosition = `${positionPercentage}% 0`;
    });

    // Optional: Reset to first frame when mouse leaves?
    // Usually it's better to leave it where it was or reset to 0.
    // Given the CSS opacity transition, resetting to 0 might look smoother for next entry.
    card.addEventListener('mouseleave', () => {
       // spriteWrapper.style.backgroundPosition = '0% 0';
    });
  });
});
