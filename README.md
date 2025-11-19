# Avalon

![nodeci](https://github.com/Gyarahaddo/avalon/actions/workflows/nodeci.yml/badge.svg)
![coverage](https://github.com/Gyarahaddo/avalon/blob/gh-pages/badges.svg)

A personal portfolio website that is built with [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

<p align="start">
  <a href="https://github.com/Gyarahaddo/avalon"><img src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white" alt="website" width="100" /></a>
</p>

## Theme Switch

The site page supports light and dark modes.

<p align="center">
  <img src="doc/preview.png" alt="Page Theme Screenshot" width="80%" />
</p>

## AWS Deployment

Using WAF + CloudFront + S3 provides a secure, high-performance architecture for static websites.
CloudFront caches content globally for faster delivery, WAF filters malicious traffic and provides DDoS protection, and S3 serves as a private, reliable origin. Together they improve security, speed, scalability, and cost efficiency compared to exposing S3 directly.

<p align="center">
  <img src="doc/deployment_architecture.png" alt="Deployment Architecture" width="80%" />
</p>

---

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
