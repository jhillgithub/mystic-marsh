<a name="readme-top"></a>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />

<h1 align="center">Mystic Marsh</h1>

  <p align="center">
    A 3D Experience using React Three Fiber
    <br />
    <a href="https://github.com/jhillgithub/mystic-marsh"><strong>Explore the repo »</strong></a>
    <br />
    <br />
    <a href="https://mystic-marsh.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/jhillgithub/mystic-marsh/issues">Report Bug</a>
    ·
    <a href="https://github.com/jhillgithub/mystic-marsh/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

## About The Project

This is a sandbox to experiment with a variety of 3D features for the web.

The project includes experiments with:

- Procedural landscape generation with efficient mesh instancing.
- Realistic water using tranmissive materials and surface displacement.
- Responsive 3D design that adapts the camera for mobile devices.
- Wind animations using algorithmic techniques.
- Pathfinding techniques to simulate swimming fish.
- And more to come!

### Screenshots

![Product Name Screen Shot][marsh-screenshot]

![Product Name Screen Shot][marsh2-screenshot]

![Product Name Screen Shot][fish-screenshot]

![Product Name Screen Shot][turtle-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][React.js]][React-url]

[![Astro][Astro.js]][Astro-url]

[![Typescript][Typescript]][Typescript-url]

[![TailwindCSS][TailwindCSS]][Tailwindcss-url]

[![React Three Fiber][@react-three/fiber]][R3F-url]

[![Drei][Drei]][Drei-url]

[![Leva][Leva]][Leva-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jhillgithub/mystic-marsh.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the application
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## User Controls

There are a few controls that are hidden by default but can be enabled in the code. Leva has a hidden flag that can be removed in order to turn on a control panel for the clouds and water. There is also a stats component that can be enabled to see frames per second.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Add AI to the fish
- [ ] Create a path following system for the fish
- [ ] Create a procedural tree generator
  - [ ] Replash tree leaves with instanced meshes to reduce size

See the [open issues](https://github.com/jhillgithub/mystic-marsh/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/jhillgithub/mystic-marsh.svg?style=for-the-badge
[forks-url]: https://github.com/jhillgithub/mystic-marsh/network/members
[stars-shield]: https://img.shields.io/github/stars/jhillgithub/mystic-marsh.svg?style=for-the-badge
[stars-url]: https://github.com/jhillgithub/mystic-marsh/stargazers
[issues-shield]: https://img.shields.io/github/issues/jhillgithub/mystic-marsh.svg?style=for-the-badge
[issues-url]: https://github.com/jhillgithub/mystic-marsh/issues
[marsh-screenshot]: images/marsh.png
[marsh2-screenshot]: images/marsh2.png
[fish-screenshot]: images/fish.png
[turtle-screenshot]: images/turtle.png
[Astro.js]: https://img.shields.io/badge/astro.js-000000?style=for-the-badge&logo=astrodotjs&logoColor=white
[Astro-url]: https://astro.build/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-000000?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwindcss-url]: https://reactjs.org/
[Typescript]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://reactjs.org/
[@React-three/fiber]: https://img.shields.io/badge/r3f-000000?style=for-the-badge&logo=r3f&logoColor=white
[R3F-url]: https://github.com/pmndrs/react-three-fiber
[Drei]: https://img.shields.io/badge/drei-000000?style=for-the-badge&logo=drei&logoColor=white
[Drei-url]: https://github.com/pmndrs/drei
[Leva]: https://img.shields.io/badge/leva-000000?style=for-the-badge&logo=leva&logoColor=white
[Leva-url]: https://github.com/pmndrs/leva
