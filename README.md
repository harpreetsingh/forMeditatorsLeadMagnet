# Lotus Heart Meditation Landing Page

A simple, conversion-focused landing page designed to introduce visitors to the Lotus Heart Meditation practice and collect user information before providing access to a downloadable PDF guide.

## 🧘‍♀️ Project Overview

This landing page serves as a lead capture and PDF distribution system for the Lotus Heart Meditation practice. It's designed with a clean, calming aesthetic inspired by the Calm app, targeting beginners seeking relaxation, better sleep, and jetlag relief.

## ✨ Key Features

- **Clean, Calm Design**: Inspired by the Calm app aesthetic with soothing colors and minimal design
- **Tally.so Form Integration**: Embedded form for seamless user data collection
- **Direct PDF Access**: Automatic redirect to Canva-hosted PDF download upon form submission
- **Mobile-First Design**: Fully responsive across all devices
- **Fast Performance**: Lightweight, optimized for quick loading

## 🎯 Target Audience

- Beginners to meditation
- People seeking relaxation and better sleep
- Individuals looking for jetlag relief solutions
- Visitors from the ForMeditators.com blog

## 🚀 User Journey

1. **Landing Page**: Clean introduction to Lotus Heart Meditation
2. **Form Submission**: User provides name and meditation frequency
3. **Direct Redirect**: Immediate access to Canva page for PDF download

## 📋 Form Fields

The integrated Tally.so form collects:
- First Name (required)
- Last Name (required) 
- Meditation frequency in days per week (required)

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Form Handling**: Tally.so embedded form
- **PDF Hosting**: Canva direct link
- **Package Manager**: npm/pnpm

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx              # Main landing page
├── components/
│   ├── ui/                   # shadcn/ui components
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── [images]
└── styles/
    └── globals.css
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd forMeditatorsLeadMagnet
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design Philosophy

### Visual Design
- **Color Palette**: Calming blues, whites, and soft greens
- **Typography**: Clean, readable fonts for optimal user experience
- **Layout**: Centered, single-column design for focus
- **Imagery**: Minimal, meditation-focused background elements

### User Experience Principles
- **Simplicity**: Clean interface without distractions
- **Clarity**: Clear benefit messaging and call-to-action
- **Accessibility**: High contrast and readable text
- **Performance**: Fast loading for immediate engagement

## 📈 Key Benefits Highlighted

- **Relaxation**: Gentle path to inner peace
- **Better Sleep**: Natural sleep improvement techniques
- **Jetlag Relief**: Travel-friendly meditation practices
- **Beginner-Friendly**: Accessible to meditation newcomers

## 🔧 Configuration

### Tally.so Form Integration

The form is embedded using the following configuration:
- `alignLeft=1`: Left-aligned form layout
- `hideTitle=1`: Clean appearance without form title
- `transparentBackground=1`: Seamless integration with page design
- `dynamicHeight=1`: Responsive height adjustment

### Form Redirect

Upon successful submission, users are automatically redirected to the Canva PDF download page (configured in Tally.so dashboard).

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
pnpm build
```

### Deploy to Vercel (Recommended)

1. Connect your repository to Vercel
2. Vercel will automatically detect the Next.js configuration
3. Deploy with default settings


## 📊 Success Metrics

- Form completion rate
- PDF download engagement
- Page loading performance
- Mobile responsiveness
- User experience from landing to download

## 🔄 Content Strategy

### Messaging Hierarchy
1. **Primary**: Lotus Heart Meditation practice name
2. **Secondary**: Core benefits (relax, sleep better, beat jetlag)
3. **Tertiary**: Beginner-friendly approach
4. **Action**: Clear PDF download call-to-action

### Copy Guidelines
- Concise, benefit-focused messaging
- No lengthy practice explanations
- Clear user expectations
- Welcoming but direct tone

## 🛡️ Technical Considerations

- **Performance**: Optimized images and minimal JavaScript
- **Security**: Form handling managed by Tally.so
- **Scalability**: Static site architecture for high performance
- **Maintenance**: Minimal maintenance required

## 📝 License

[Add your license information here]

## 🤝 Contributing

[Add contribution guidelines if applicable]

## 📧 Contact

[Add contact information for project maintainers]

---

**Built with focus on simplicity, conversion, and user experience.**
