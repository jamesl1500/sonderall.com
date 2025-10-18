# Sonderall

A journaling app designed to help people express and process their emotions in a safe, supportive environment.

## About

Sonderall provides a private space for users to document their feelings, thoughts, and daily experiences. Whether you're navigating challenging times or celebrating moments of joy, Sonderall helps you track your emotional journey and gain insights into your mental wellbeing.

## Features

- **Emotion Tracking**: Log and categorize your feelings over time
- **Private Journaling**: Secure, personal space for self-expression
- **Cross-Platform**: Available on mobile and web
- **Intuitive Interface**: Clean, distraction-free writing experience

## Tech Stack

This project is structured as a **monorepo** containing multiple applications:

### Mobile App
- **React Native**: Cross-platform mobile application for iOS and Android
- Enables native performance with shared codebase
- Offline-first architecture for journaling on the go

### Web App
- **Next.js**: Server-side rendered web application
- React-based framework for optimal SEO and performance
- Progressive Web App (PWA) capabilities

### Shared Infrastructure
- Shared component libraries and utilities
- Unified API integration layer
- Common TypeScript types and interfaces
- Consistent design system across platforms

## Getting Started

```bash
# Install dependencies (In root)
yarn

# Run mobile app
yarn workspace sonderall-app start

# Run web app
yarn workspace sonderall-web dev
```

## License

MIT 
