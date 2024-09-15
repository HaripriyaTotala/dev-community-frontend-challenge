document.addEventListener('DOMContentLoaded', function() {
    const solarSystem = document.createElement('div');
    solarSystem.id = 'solar-system';
    solarSystem.style.cssText = 'position: relative; width: 100%; height: 300px; overflow: hidden; background-color: #000;';
    document.body.insertBefore(solarSystem, document.body.firstChild);

    const sun = document.createElement('div');
    sun.style.cssText = 'position: absolute; left: 50%; top: 50%; width: 50px; height: 50px; background-color: yellow; border-radius: 50%; transform: translate(-50%, -50%);';
    solarSystem.appendChild(sun);

    const planets = [
      { name: 'Mercury', color: '#8c8c8c', size: 10, orbit: 60 },
      { name: 'Venus', color: '#e6e6fa', size: 15, orbit: 75 },
      { name: 'Earth', color: '#4169e1', size: 16, orbit: 90 },
      { name: 'Mars', color: '#ff4500', size: 14, orbit: 105 },
      { name: 'Jupiter', color: '#ffa500', size: 30, orbit: 130 },
      { name: 'Saturn', color: '#f4a460', size: 28, orbit: 160 },
      { name: 'Uranus', color: '#40e0d0', size: 22, orbit: 190 },
      { name: 'Neptune', color: '#4169e1', size: 21, orbit: 220 }
    ];

    planets.forEach((planet, index) => {
      const planetEl = document.createElement('div');
      planetEl.style.cssText = `position: absolute; left: 50%; top: 50%; width: ${planet.size}px; height: ${planet.size}px; background-color: ${planet.color}; border-radius: 50%; transform: translate(-50%, -50%);`;
      solarSystem.appendChild(planetEl);

      const orbit = document.createElement('div');
      orbit.style.cssText = `position: absolute; left: 50%; top: 50%; width: ${planet.orbit * 2}px; height: ${planet.orbit * 2}px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 50%; transform: translate(-50%, -50%);`;
      solarSystem.appendChild(orbit);

      function animate() {
        const angle = (Date.now() / 1000) * (1 / (index + 1));
        const x = Math.cos(angle) * planet.orbit;
        const y = Math.sin(angle) * planet.orbit;
        planetEl.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        requestAnimationFrame(animate);
      }
      animate();
    });
  });