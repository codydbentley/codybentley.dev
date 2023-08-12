interface Project {
  name: string
  url: string
  description: string
}

export default [
  {
    name: 'F1 Live Dashboard',
    url: 'https://gitlab.com/codydbentley/f1-live-dashboard',
    description: 'Reads UDP telemetry data from Codemasters Formula 1 games and converts to JSON for web socket use.',
  },
  {
    name: 'codybentley.dev',
    url: 'https://codybentley.dev',
    description: "Hey you're already here!",
  },
  {
    name: 'ekko.dev',
    url: 'https://ekko.dev',
    description: "A playground website where I try out different things I'm interested in.",
  },
  {
    name: 'Startup Company Planner',
    url: 'https://gitlab.com/codydbentley/startup-company-planner',
    description: 'A production planner for the game Startup Company.',
  },
  {
    name: 'Space Engineers Tools',
    url: 'https://gitlab.com/codydbentley/space-engineers-tools',
    description: 'A tool set for planning and preparing builds in the game Space Engineers',
  },
  {
    name: 'Spine',
    url: 'https://gitlab.com/codydbentley/spine',
    description: 'A concept for a pluggable JS rendering/game engine.',
  },
] as Project[]
