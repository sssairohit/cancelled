## Cancelled

An interactive social media application where users can vote on trending celebrities, see live vote counts, and join the discussion. See who's in the spotlight and who's getting 'cancelled' by the court of public opinion.

### File Structure

The project is organized into a clean and maintainable structure:

```
/
├── components/
│   ├── icons/                # SVG icon components
│   ├── layout/               # Layout components (Sidebars, BottomNav)
│   ├── CelebrityCard.tsx       # Displays a single celebrity's info and actions
│   ├── DiscussionThread.tsx    # Modal for viewing comments
│   ├── Header.tsx              # Sticky header for the main feed
│   ├── MainFeed.tsx            # The central content column
│   ├── ReasonBubble.tsx        # Small component for vote reasons
│   └── ThemeSwitcher.tsx       # Component to switch between color themes
├── data/
│   └── mockData.ts           # Initial static data for celebrities
├── services/
│   └── geminiService.ts        # Service for interacting with the Google Gemini API
├── App.tsx                     # Main application component, orchestrates layout and state
├── index.html                  # The main HTML entry point
├── index.tsx                   # React application entry point
├── metadata.json               # Application metadata
├── README.md                   # This file
└── types.ts                    # TypeScript type definitions for the application
```

### Getting Started

This is a static web application built with React and Tailwind CSS. To run it, simply open the `index.html` file in your web browser. No build step is required.

### Color System Overview

The application features a robust, themeable color system using CSS variables. Three themes are currently available: Light, Midnight Dark, and Monokai '95 Blue.

#### Light Theme

Clean, bright, and high-contrast for excellent readability in well-lit environments.

| Role                | Hex      | Description                       |
| ------------------- | -------- | --------------------------------- |
| Background          | `#FFFFFF`  | Base canvas                       |
| Surface             | `#F7F7F8`  | Card / Panel background           |
| Primary Text        | `#202124`  | High-contrast readable text       |
| Secondary Text      | `#5F6368`  | Muted, supportive text            |
| Accent / Primary    | `#EA4335`  | Main brand / CTA color            |
| Border / Grid Lines | `#DADCE0`  | Solid, visible dividers           |
| Success             | `#34A853`  | Positive feedback                 |
| Error               | `#EA4335`  | Errors, destructive actions       |

#### Midnight Dark Theme

A deep, true-black theme designed for low-light conditions, providing excellent contrast without causing eye strain.

| Role                | Hex      | Description                           |
| ------------------- | -------- | ------------------------------------- |
| Background          | `#0E0E10`  | True deep black base                  |
| Surface             | `#1A1A1C`  | Panels, modals                        |
| Primary Text        | `#E8EAED`  | Near-white text                       |
| Secondary Text      | `#AEB0B4`  | Muted, low contrast                   |
| Accent / Primary    | `#EA4335`  | Brand red (pops beautifully on dark) |
| Border / Grid Lines | `#2C2C30`  | Distinct grid lines, visible yet subtle |
| Success             | `#34C759`  | Vivid green                           |
| Error               | `#FF453A`  | Bright error red                      |

#### Monokai ’95 Blue Theme

A retro-coding aesthetic with neon vibrancy and dark-teal undertones, inspired by classic code editors.

| Role                | Hex      | Description                         |
| ------------------- | -------- | ----------------------------------- |
| Background          | `#1E1F29`  | Deep blue-gray base                 |
| Surface             | `#2D2F3A`  | Slightly lighter panels             |
| Primary Text        | `#F8F8F2`  | Monokai-style off-white             |
| Secondary Text      | `#A6ACCD`  | Muted cool gray-blue                |
| Accent / Primary    | `#EA4335`  | Your brand red, remains consistent  |
| Border / Grid Lines | `#3B3E4D`  | Visible, crisp lines                |
| Success             | `#50FA7B`  | Vibrant green                       |
| Error               | `#FF5555`  | Bright neon red                     |

### Contributing

Contributions are welcome! If you have suggestions or want to improve the code, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
