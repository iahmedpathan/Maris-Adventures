# Maris Adventures - Sea Tours Website

## Concept & Vision

Maris Adventures is a premium sea tours company that offers unforgettable ocean experiences. The website should evoke the feeling of ocean breezes, crystalline waters, and the thrill of marine exploration. The design is clean, refreshing, and adventurous — like a breath of sea air.

## Design Language

### Aesthetic Direction
Coastal minimalism meets adventure — inspired by luxury yacht clubs and oceanographic institutes. Clean lines with subtle wave motifs and nautical accents.

### Color Palette
- **Primary Blue**: #0066CC (Ocean blue)
- **Secondary Blue**: #004999 (Deep sea)
- **Accent Cyan**: #00B4D8 (Wave accent)
- **Light Blue**: #E6F3FF (Foam/sparkle)
- **White**: #FFFFFF (Crisp white)
- **Dark Navy**: #001B3D (Night ocean)
- **Text Dark**: #1A2B3C
- **Text Light**: #5A6B7C

### Typography
- **Headings**: 'Playfair Display', serif — elegant, maritime feel
- **Body**: 'Inter', sans-serif — clean, readable
- **Accent**: 'Montserrat', sans-serif — buttons, labels

### Spatial System
- Base unit: 8px
- Section padding: 80px vertical on desktop, 48px on mobile
- Card border-radius: 16px
- Button border-radius: 8px

### Motion Philosophy
- Smooth wave-like transitions (ease-in-out, 300-400ms)
- Subtle hover lifts on cards (translateY -4px, shadow increase)
- Fade-in animations on scroll
- Button ripples suggesting water

## Layout & Structure

### Sections (in order)
1. **Hero** - Full viewport with logo, tagline, CTA
2. **About** - Brief company intro with ocean imagery
3. **Tour Plans** - Three featured tour packages in cards
4. **Merchandise** - T-shirts and items with size selector
5. **Size Chart** - Modal/section showing measurements
6. **Contact/Footer** - Booking inquiries and social links

### Responsive Strategy
- Desktop: Multi-column layouts, full imagery
- Tablet: Adjusted grids, stacked where needed
- Mobile: Single column, collapsible sections

## Features & Interactions

### Tour Plans Section
- 3 tour packages: Morning Sail, Sunset Cruise, Full Adventure
- Each card shows: name, duration, price, highlights, "Book Now" button
- Hover: card lifts, shadow deepens
- Click: scrolls to booking form or shows modal

### Merchandise Section
- Product grid with images, name, price
- Size selector dropdown per product
- "Add to Cart" button
- Size chart toggle button (opens modal)

### Size Chart Modal
- Table with measurements (Chest, Waist, Length for S-3XL)
- Unit toggle (inches/cm)
- Close button

### Navigation
- Fixed top nav with smooth scroll to sections
- Mobile hamburger menu

## Component Inventory

### Navigation Bar
- Logo placeholder on left
- Nav links: Tours, Merchandise, About, Contact
- "Book Now" CTA button
- States: default (transparent), scrolled (white bg, shadow)

### Tour Card
- Image top, content below
- Title, duration badge, price
- Feature list with checkmarks
- CTA button
- States: default, hover (lift + shadow)

### Product Card
- Product image
- Name, price
- Size selector dropdown
- Add to cart button
- States: default, hover, loading (on add)

### Size Chart Modal
- Overlay background (semi-transparent)
- White card with table
- Unit toggle
- Close button

### Buttons
- Primary: Blue bg, white text, hover darker
- Secondary: White bg, blue border/text, hover fills
- Disabled: Gray, no pointer

## Technical Approach

- **Framework**: React with Vite
- **Styling**: Tailwind CSS
- **State**: React useState for cart, modals, size selections
- **Icons**: Lucide React for UI icons
- **Fonts**: Google Fonts (Playfair Display, Inter, Montserrat)