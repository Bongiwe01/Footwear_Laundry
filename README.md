# Footwear Laundry — Web Platform

> **Every pair, perfection.**

A full-stack marketing and booking web platform for Footwear Laundry, a South African premium sneaker and footwear cleaning service based in Johannesburg.

---

## Live Site

🌐 [footwearlaundry.co.za](https://footwearlaundry.co.za)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Backend | Supabase (PostgreSQL) |
| Auth | Supabase Auth (email/password) |
| Contact Form | Formspree |
| Deployment | Vercel |
| Version Control | Git |

---

## Project Structure

```
src/
├── assets/                  # Images and static assets
│   └── products/            # Product images for shop
├── components/
│   ├── ui/                  # shadcn/ui base components
│   ├── icons/               # Custom icon components
│   ├── BookingCTA.tsx       # Booking call-to-action section
│   ├── Footer.tsx           # Site-wide footer
│   ├── Hero.tsx             # Home page hero section
│   ├── Logo.tsx             # Custom SVG logo
│   ├── Navbar.tsx           # Navigation bar with theme toggle
│   ├── ServicesPreview.tsx  # Services preview on home page
│   ├── ShopPreview.tsx      # Shop preview on home page
│   └── ThemeProvider.tsx    # Light/dark mode context
├── hooks/
│   ├── useAuth.tsx          # Auth context and admin role check
│   ├── use-mobile.tsx       # Mobile breakpoint hook
│   └── use-toast.ts         # Toast notification hook
├── integrations/
│   └── supabase/
│       ├── client.ts        # Supabase client singleton
│       └── types.ts         # Auto-generated database types
├── lib/
│   └── utils.ts             # Utility functions
├── pages/
│   ├── About.tsx            # About page
│   ├── AdminBookings.tsx    # Admin dashboard
│   ├── AdminLogin.tsx       # Admin login page
│   ├── Booking.tsx          # Booking form
│   ├── BookingConfirmation.tsx     # Post-booking confirmation
│   ├── Contact.tsx          # Contact page with Formspree
│   ├── ContactConfirmation.tsx     # Post-contact confirmation
│   ├── Index.tsx            # Home page
│   ├── NotFound.tsx         # 404 page
│   ├── Services.tsx         # Services page
│   └── Shop.tsx             # Shop page (display only — Phase 1)
├── App.tsx                  # Root component with router and providers
├── main.tsx                 # App entry point
└── index.css                # Global styles and CSS variables
supabase/
└── migrations/              # Database migration SQL files
```

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, services preview, shop preview, booking CTA |
| `/about` | About | Brand story and values |
| `/services` | Services | Cleaning service tiers with pricing |
| `/shop` | Shop | Product display (e-commerce Phase 2) |
| `/contact` | Contact | Contact form and business info |
| `/contact/confirmation` | Contact Confirmation | Post-submission confirmation |
| `/booking` | Booking | Full booking form |
| `/booking/confirmation` | Booking Confirmation | Post-booking summary with reference number |
| `/admin/login` | Admin Login | Password-protected admin entry |
| `/admin/bookings` | Admin Dashboard | View and manage all bookings |

---

## Key Features

- **Booking system** with Supabase backend and auto-generated reference numbers (`FL-1001`, `FL-1002`, etc.)
- **Admin dashboard** with role-based access, booking status management and WhatsApp integration
- **Contact form** connected to Formspree with email delivery
- **Light and dark mode** toggle persisted in localStorage
- **Fully responsive** across mobile, tablet and desktop
- **Service pre-selection** when navigating from Services page to Booking form
- **Google Maps integration** on address links in Contact page and Footer

---

## Local Development

### Prerequisites
- Node.js 18+
- Supabase CLI
- Git

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/footwear-laundry.git
cd footwear-laundry
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root:
```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key-here
```

4. **Run database migrations**
```bash
supabase link --project-ref your-project-ref
supabase db push
```

5. **Start the development server**
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

---

## Deployment

Deployed on **Vercel** with automatic deployments on every `git push` to the `main` branch.

### Environment Variables on Vercel
Add the following in Vercel → Project Settings → Environment Variables:
```
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
```

### Routing
A `vercel.json` file handles React Router client-side routing:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## Granting Admin Access

After a user signs up, run this in the Supabase SQL Editor:

```sql
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'
FROM auth.users
WHERE email = 'admin@email.com';
```

---

## Phase 2 Roadmap

- [ ] Testimonials and reviews section
- [ ] Before & after gallery
- [ ] Multi-item booking with price summary
- [ ] Shop with cart and checkout (Yoco / PayFast)
- [ ] Email notifications to customers on booking status updates
- [ ] Photo uploads on booking form

---

## Developer

**Bongiwe Ntshantsha** — Web Designer & Developer
📧 bongiwentshantsha@gmail.com | 📱 0761114366
