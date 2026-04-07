# Wireflow

Interactive wiring diagram visualization tool for streaming and recording setups.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ctxzz/v0-diagram-generation)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/um69diBcyuj)

## Features

- **Mermaid Import** - Paste Mermaid graph syntax to instantly generate interactive diagrams
- **Drag & Drop** - Freely reposition nodes with real-time connection updates
- **Edit Mode** - Add, modify, and delete nodes and connections
- **Zoom & Pan** - Navigate large diagrams with smooth controls (Ctrl+scroll, Alt+drag)
- **Export** - Download diagrams as PNG, SVG, Mermaid, or JSON
- **Highlight Mode** - Toggle all connections active to visualize the full signal flow
- **Auto Layout** - Automatic positioning and grouping based on subgraph definitions


## Project Preview

![Streaming Setup Screenshot](./Screenshot%202026-04-07%20214823.jpg)

[📹 Download / Watch Video](./2026-04-07%2022-04-47.mp4)

## Supported Connection Types

| Type | Color | Description |
|------|-------|-------------|
| HDMI | Cyan | HDMI video connections |
| SDI | Orange | SDI broadcast connections |
| USB | Green | USB data connections |
| Ethernet | Yellow | Network connections |
| Type-C | Magenta | USB Type-C connections |

## Usage

### Import from Mermaid

Click "Paste Mermaid" and paste your diagram code:

\`\`\`mermaid
graph LR
  subgraph Studio
    PC[Streaming PC]
    CAM[Camera]
    ATEM[ATEM Mini]
  end
  
  PC -->|HDMI| ATEM
  CAM -->|HDMI| ATEM
  ATEM -->|USB| PC
\`\`\`

### Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Apply Mermaid code | `Cmd/Ctrl + Enter` |
| Zoom in/out | `Ctrl + Scroll` |
| Pan | `Alt + Drag` or `Middle Mouse + Drag` |
| Reset zoom | Click zoom percentage |

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React

## Development

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) - v9+
- A code editor (VS Code recommended)

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Troubleshooting

### Windows Users: "pnpm is not recognized"

This project was initially configured with pnpm but has been switched to npm for better cross-platform compatibility. If you see this error:

```
'pnpm' is not recognized as an internal or external command
```

**Solution:**
1. Delete `pnpm-lock.yaml` (if it exists)
2. Delete `node_modules` folder
3. Run `npm install`

### "Failed to load SWC binary for win32/x64" Error

This error occurs when SWC binaries are corrupted or incompatible.

**Solution:**
```bash
# Clean installation
rmdir /s /q node_modules
npm install
```

### Slow Filesystem Warning

If you see a warning about slow filesystem detection, this typically occurs on network drives. Consider moving your project to a local C: or D: drive for better performance.

## Project Structure

```
components/          # Reusable React components
├── wiring-diagram.tsx   # Main diagram visualization
├── diagram-node.tsx     # Individual node component
├── connection-line.tsx  # Connection rendering
├── edit-panel.tsx       # Node/connection editor
├── code-input.tsx       # Mermaid code input
├── export-dialog.tsx    # Export functionality
└── ui/                  # shadcn/ui components

lib/
├── mermaid-parser.tsx   # Mermaid graph parsing and conversion
├── diagram-templates.ts # Predefined diagram templates
└── utils.ts             # Utility functions

app/                  # Next.js App Router pages
├── layout.tsx
├── page.tsx
└── globals.css
```

## Technologies Used

- **Framework**: Next.js 16.2.2 (Turbopack)
- **Styling**: Tailwind CSS v4 with PostCSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Diagram Parsing**: Mermaid.js integration
- **TypeScript**: Type-safe development

## Key Features

### Mermaid Integration
Import Mermaid graph syntax to instantly generate interactive diagrams. Supports:
- Flowcharts (graph LR, TD, etc.)
- Subgraph grouping
- Custom labels and styling

### Interactive Editing
- **Add Nodes**: Right-click to add new nodes
- **Add Connections**: Drag between nodes to create connections
- **Delete**: Select and press Delete key
- **Drag & Drop**: Freely reposition all elements

### Export Options
- **PNG**: Raster image for sharing
- **SVG**: Scalable vector graphics
- **JSON**: Save diagram data
- **Mermaid**: Export as Mermaid syntax

### Connection Types with Styling
| Type | Color | Use Case |
|------|-------|----------|
| HDMI | Cyan | Video connections |
| SDI | Orange | Broadcast connections |
| USB | Green | Data connections |
| Ethernet | Yellow | Network connections |
| Type-C | Magenta | USB Type-C connections |

## Common Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Utilities
npm run lint         # Run linting
npm audit            # Check for vulnerabilities
npm audit fix        # Fix security issues
```

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## License

MIT
