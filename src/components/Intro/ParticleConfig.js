export const ParticleConfig = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    color: {
      value: ["#64FFDA"],
    },
    line_linked: {
      color: "#64FFDA",
      enable: true,
      opacity: 0.03,
    },
    move: {
      random: true,
      speed: 0.3,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 2,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
}
