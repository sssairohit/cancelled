# Cancelled

An interactive social media application where users can vote on trending celebrities, see live vote counts, and join the discussion. See who's in the spotlight and who's getting 'cancelled' by the court of public opinion.

[Link to Live Demo](#) &mdash; *Coming Soon*

## Key Features

*   **Vote & See Live Results:** Upvote or downvote celebrities and see the popularity bar shift in real-time.
*   **AI-Generated Reasons:** Each vote generates a unique, plausible reason using the Google Gemini API, adding flavour to the feed.
*   **Discussion Threads:** Dive into dedicated discussion modals for each celebrity to see comments.
*   **Modern Layout:** A responsive, industry-standard layout with sidebars for desktop and a bottom navigation bar for mobile.
*   **Themable UI:** Switch between three distinct color themes (Light, Dark, Monokai) to suit your preference.

## Tech Stack

*   **Frontend:** [React](https://reactjs.org/) (with Hooks)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **AI/Generative:** [Google Gemini API](https://ai.google.dev/)

## Project Structure

The project is organized into a clean and maintainable structure, promoting separation of concerns.

```
/
├── components/
│   ├── icons/                # Standalone SVG icon components (e.g., UpvoteIcon.tsx)
│   ├── layout/               # High-level layout components (LeftSidebar, RightSidebar, BottomNav)
│   ├── CelebrityCard.tsx       # Core component for displaying a single celebrity.
│   ├── DiscussionThread.tsx    # Modal for viewing celebrity-specific comments.
│   ├── Header.tsx              # Sticky header used at the top of the main feed.
│   ├── MainFeed.tsx            # The central, scrollable content column.
│   ├── ReasonBubble.tsx        # Small UI component for displaying AI-generated vote reasons.
│   └── ThemeSwitcher.tsx       # UI for selecting a color theme.
├── data/
│   └── mockData.ts           # Provides the initial static data for celebrities, ensuring instant load times.
├── services/
│   └── geminiService.ts        # Handles all interactions with the Google Gemini API.
├── App.tsx                     # Main application component; manages state, layout, and logic.
├── index.html                  # The main HTML entry point for the browser.
├── index.tsx                   # The root React component that mounts the App.
├── metadata.json               # Application metadata.
├── README.md                   # This documentation file.
└── types.ts                    # Centralized TypeScript type definitions (e.g., Celebrity, Reason).
```

## Getting Started

This is a static web application and requires no build step.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/cancelled.git
    cd cancelled
    ```
2.  **API Key Configuration:**
    This project uses the Google Gemini API. The API key is expected to be available as an environment variable (`process.env.API_KEY`). In this development environment, it is handled automatically.
3.  **Run the application:**
    Simply open the `index.html` file in a modern web browser.

## In-Depth Breakdown

### Core Components

*   **`CelebrityCard.tsx`**: This is the heart of the UI. It's responsible for displaying a celebrity's image, name, description, vote statistics, and recent vote reasons. It also contains the action buttons for voting and opening the discussion thread.
*   **`DiscussionThread.tsx`**: A modal component that overlays the main UI. It provides a focused view for reading comments related to a specific celebrity. State for its visibility is managed in `App.tsx`.
*   **`ThemeSwitcher.tsx`**: A simple but important component that allows users to cycle through available themes. It persists the user's choice to `localStorage` and updates the `data-theme` attribute on the `<html>` element.

### Gemini API Service

*   **`services/geminiService.ts`**: This file abstracts all communication with the Google Gemini API.
    *   `generateVoteReason()`: Takes a celebrity name and a vote type ('upvote' | 'downvote') as input. It constructs a prompt, sends it to the `gemini-2.5-flash` model, and returns a short, contextually appropriate reason for the vote. This adds a dynamic, generative element to the user interaction.

### Theming System

The application features a robust, themeable color system using CSS variables defined in `index.html`. The active theme is controlled by the `data-theme` attribute on the `<html>` tag.

Three themes are currently available: **Light**, **Midnight Dark**, and **Monokai ’95 Blue**.

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

#### Midnight Dark Theme

A deep, true-black theme designed for low-light conditions, providing excellent contrast without causing eye strain.

| Role                | Hex      | Description                           |
| ------------------- | -------- | ------------------------------------- |
| Background          | `#0E0E10`  | True deep black base                  |
| Surface             | `#1A1A1C`  | Panels, modals                        |
| Primary Text        | `#E8EAED`  | Near-white text                       |
| Secondary Text      | `#AEB0B4`  | Muted, low contrast                   |
| Border / Grid Lines | `#2C2C30`  | Distinct grid lines, visible yet subtle |

#### Monokai ’95 Blue Theme

A retro-coding aesthetic with neon vibrancy and dark-teal undertones, inspired by classic code editors.

| Role                | Hex      | Description                         |
| ------------------- | -------- | ----------------------------------- |
| Background          | `#1E1F29`  | Deep blue-gray base                 |
| Surface             | `#2D2F3A`  | Slightly lighter panels             |
| Primary Text        | `#F8F8F2`  | Monokai-style off-white             |
| Secondary Text      | `#A6ACCD`  | Muted cool gray-blue                |
| Border / Grid Lines | `#3B3E4D`  | Visible, crisp lines                |


## Roadmap

*   **Commenting Functionality:** Implement the ability for users to add their own comments in discussion threads.
*   **Real-time Database:** Integrate a backend service (like Firebase) to persist votes and comments, making the data live across all user sessions.
*   **User Authentication:** Allow users to sign up and log in to have their own profiles.
*   **Infinite Scroll:** Load more celebrities as the user scrolls down the main feed.
*   **Search & Explore Page:** Build out the functionality for the search/explore section.

## Contributing

Contributions are welcome! If you have suggestions or want to improve the code, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes, adhering to the existing code style.
4.  Commit your changes (`git commit -m 'feat: Add some amazing feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a pull request with a clear description of the changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
