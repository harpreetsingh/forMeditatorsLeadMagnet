# Lotus Heart Meditation Landing Page - Project Specification

## Project Overview
Create a simple, conversion-focused landing page for the Lotus Heart Meditation practice that seamlessly integrates a Tally.so form and directs users to a Canva-hosted PDF download.

## Functional Requirements

### Primary Function
- Single-page web application serving as a lead capture and PDF distribution system
- Integration with Tally.so embedded form
- Automatic redirect to Canva PDF download upon form submission

### Form Integration
- **Platform**: Tally.so embedded form
- **Fields**: 
  - First Name (required)
  - Last Name (required)
  - Meditation frequency in days per week (required)
- **Submission Behavior**: Direct redirect to Canva page (configured in Tally.so)

### Content Structure
1. **Header Section**: Lotus Heart Meditation title
2. **Benefit Statement**: "Relax, sleep better, and beat jetlag"
3. **Call-to-Action**: Clear indication of PDF download
4. **Form Section**: Embedded Tally.so form
5. **Footer**: Minimal, clean

## Design Requirements

### Visual Design
- **Style Inspiration**: Calm app aesthetic
- **Color Palette**: Calming, soft colors (blues, whites, soft greens)
- **Typography**: Clean, readable fonts
- **Layout**: Centered, single-column design
- **Imagery**: Minimal, meditation-focused if any

### User Experience
- **Loading**: Fast, lightweight page
- **Responsive**: Mobile-first design
- **Accessibility**: Clean contrast, readable text
- **Focus**: Form completion as primary action

### Branding
- Simple, clean presentation
- Lotus Heart Meditation as the practice name
- Professional but approachable tone
- No complex explanations or lengthy content

## Technical Requirements

### Architecture
- **Type**: Static landing page
- **Framework**: Modern web technologies (HTML5, CSS3, JavaScript)
- **Third-party Integrations**: Tally.so form embed
- **Hosting**: Standard web hosting (no special requirements)

### Performance
- Fast loading times
- Optimized images
- Minimal JavaScript
- Cross-browser compatibility

### Form Handling
- All form logic handled by Tally.so
- No custom backend required
- Redirect configuration managed in Tally.so dashboard
- Form validation handled by Tally.so

## Content Specifications

### Messaging Hierarchy
1. **Primary**: Lotus Heart Meditation
2. **Secondary**: Benefits (relax, sleep better, beat jetlag)
3. **Tertiary**: Beginner-friendly indication
4. **Action**: Get your PDF guide

### Copy Guidelines
- Concise, benefit-focused
- No lengthy practice explanations
- Clear expectation: PDF download
- Welcoming but direct tone

## Integration Specifications

### Tally.so Form
- Embedded iframe or script integration
- Styled to match landing page design
- Thank you page redirect to Canva URL
- Form fields match specification exactly

### Canva PDF Distribution
- Direct link provided by client
- Same PDF for all users regardless of meditation frequency
- No authentication required
- PDF hosted and managed through Canva

## Success Criteria
- Clean, professional landing page that matches Calm app aesthetic
- Seamless form submission experience
- Successful integration with Tally.so
- Direct path from form submission to PDF download
- Mobile-responsive design
- Fast loading performance

## Deliverables
1. Complete HTML/CSS/JavaScript landing page
2. Tally.so form integration
3. Responsive design for all devices
4. Ready for deployment to standard web hosting

## Constraints
- Must use Tally.so for form handling
- PDF must remain hosted on Canva
- Design must be simple and conversion-focused
- No complex meditation practice explanations