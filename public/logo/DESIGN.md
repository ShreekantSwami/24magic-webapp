---
name: Aura Precision
colors:
  surface: '#fff8f8'
  surface-dim: '#e1d8d9'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf1f2'
  surface-container: '#f5eced'
  surface-container-high: '#efe6e7'
  surface-container-highest: '#eae0e1'
  on-surface: '#1f1a1b'
  on-surface-variant: '#584145'
  inverse-surface: '#342f30'
  inverse-on-surface: '#f8eeef'
  outline: '#8b7074'
  outline-variant: '#dfbfc3'
  surface-tint: '#b02653'
  primary: '#830036'
  on-primary: '#ffffff'
  primary-container: '#a61d4c'
  on-primary-container: '#ffbbc7'
  inverse-primary: '#ffb1c0'
  secondary: '#875200'
  on-secondary: '#ffffff'
  secondary-container: '#ffb55b'
  on-secondary-container: '#744600'
  tertiary: '#741e43'
  on-tertiary: '#ffffff'
  tertiary-container: '#92365b'
  on-tertiary-container: '#ffbacf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c0'
  on-primary-fixed: '#3f0016'
  on-primary-fixed-variant: '#8f033c'
  secondary-fixed: '#ffddba'
  secondary-fixed-dim: '#ffb865'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#673d00'
  tertiary-fixed: '#ffd9e3'
  tertiary-fixed-dim: '#ffb0c9'
  on-tertiary-fixed: '#3e001e'
  on-tertiary-fixed-variant: '#7e254b'
  background: '#fff8f8'
  on-background: '#1f1a1b'
  surface-variant: '#eae0e1'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system bridges the gap between high-end financial precision and an energetic, "magical" visual identity. It targets a premium audience that values both data accuracy and a sophisticated, modern lifestyle. 

The style is a fusion of **Minimalism** and **Glassmorphism**. By maintaining vast amounts of white space and a structured grid, we preserve professional integrity. However, the introduction of vibrant gradients and translucent surface layers creates a sense of depth and innovation. The emotional response should be one of "effortless mastery"—where complex data feels light, accessible, and visually captivating.

## Colors

The palette is directly inspired by the "24MAGIC" logo, utilizing a sophisticated interplay of deep magenta, warm gold, and rich plums.

- **Primary (Magenta):** Used for key actions and branding. It provides the energetic "spark" of the interface.
- **Secondary (Gold):** Used for highlights, success states, or premium accents. 
- **Tertiary (Plum):** A deeper tone used for contrast in typography or secondary interactive elements.
- **Neutrals:** We avoid pure blacks, opting for a very dark "Espresso" neutral for text and a warm "Off-White" (Surface Warm) for backgrounds to maintain the organic, premium feel of the logo.

Gradients should be used sparingly but purposefully on high-impact elements like primary buttons, progress rings, or hero illustrations.

## Typography

This design system exclusively uses **Plus Jakarta Sans** to maintain a contemporary, clean, and welcoming aesthetic. 

- **Headlines:** Utilize tighter letter-spacing and bold weights to ground the layout.
- **Body:** Standardized at 16px for optimal readability with generous line-height to maintain the minimalist feel.
- **Numerical Data:** Given the "Precision" aspect, ensure tabular lining figures are used in tables to keep data aligned.
- **Hierarchy:** Use color (Primary or Tertiary) for high-level headlines to inject the brand's energy into the content structure.

## Layout & Spacing

The layout follows a **Fluid Grid** model built on an 8px base unit. 

- **Desktop:** 12-column grid with 24px gutters. Large 64px side margins are used to enforce the "Minimalist" feel and center the user's focus.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Spacing should prioritize vertical breathing room (using `lg` and `xl` units) between major sections to prevent the "energetic" colors from feeling overwhelming or cluttered.

## Elevation & Depth

To balance the bold colors, depth is achieved through **Glassmorphism** and **Tonal Layers** rather than heavy shadows.

- **Surface Levels:** The base layer is `surface_warm`. Above this, cards use a pure white background with a very subtle, light-grey border (1px).
- **Floating Elements:** Modals and dropdowns use a "Frosted Glass" effect (Backdrop blur: 20px) with a semi-transparent white fill (80% opacity).
- **Shadows:** When used, shadows are "Ambient"—extremely diffused (30-40px blur), low opacity (5-10%), and slightly tinted with the Primary Magenta color to make the element feel like it is physically glowing onto the surface below.

## Shapes

The shape language is **Rounded**, reflecting the organic curves and floral flourishes in the reference logo. 

- **Standard Radius:** 0.5rem (8px) for buttons and inputs.
- **Large Radius (rounded-lg):** 1rem (16px) for cards and main containers.
- **Extra Large (rounded-xl):** 1.5rem (24px) for featured hero sections or promotional banners.

This softness offsets the "Precision" aspect of the brand, making the financial data feel more approachable and less rigid.

## Components

- **Buttons:** 
    - *Primary:* Uses the Magenta-to-Gold gradient with white text. 
    - *Secondary:* Ghost style with a Primary-colored border and text. 
- **Input Fields:** Minimalist design with only a bottom border that transitions to the Primary color on focus. Labels are `label-sm` and sit above the field.
- **Cards:** White backgrounds, `rounded-lg` corners, and a subtle 1px border. For "Magic" moments (like a total balance card), use a full gradient background with white text.
- **Chips/Badges:** Soft tinted backgrounds (e.g., 10% opacity of Gold for "Pending") with bold text of the same hue.
- **Progress Bars:** Use a gradient fill to indicate completion, providing a sense of momentum.
- **Charts:** Use the primary palette (Magenta, Gold, Plum) for data visualization. Ensure high contrast against the `surface_warm` background.