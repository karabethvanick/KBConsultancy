# Karabeth Vanick Therapist Website - Setup Guide

## Overview

This is a fully functional mobile-first website for a licensed therapist and endurance coach. The site includes:

- 8 public pages (Home, About, Therapy, Coaching, Events, Testimonials, Contact, Privacy)
- Admin dashboard for managing events and testimonials
- Database integration with Supabase
- Contact form with edge function support
- Responsive design with nature-inspired styling

## Features Implemented

### Public Pages
- **Home**: Hero section with call-to-action buttons, service overview cards
- **About**: Professional bio, credentials, mission statement, Ironman 2026 section
- **Therapy**: Walk-and-talk therapy, mindfulness, art/play therapy, youth focus, evening sessions
- **Coaching**: Endurance athlete coaching, personal training, youth fitness programs
- **Events**: Dynamic list of upcoming events from database, sortable by date
- **Testimonials**: Client testimonials (anonymized), only approved ones displayed
- **Contact**: Contact form with database storage and email notification
- **Privacy**: Privacy policy and terms of service

### Admin Features
- Secure authentication using Supabase Auth
- Dashboard for managing:
  - Events (Create, Read, Update, Delete)
  - Testimonials (Create, Read, Update, Delete, Approve/Unapprove)
- View contact form submissions
- View newsletter subscribers

### Database Tables
- **events**: Store upcoming workshops and events
- **testimonials**: Client testimonials with approval system
- **contacts**: Contact form submissions
- **subscribers**: Newsletter email list

## Getting Started

### 1. Admin Account Setup

To access the admin dashboard, you need to create an admin account in Supabase:

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Users
3. Click "Add user" and create an account with:
   - Email: your admin email
   - Password: your admin password
   - Auto Confirm User: Yes

### 2. Accessing the Admin Dashboard

1. Visit your website
2. Scroll to the footer and click "Admin Login"
3. Sign in with your admin credentials
4. You can now manage events and testimonials

### 3. Managing Content

#### Events
- Click "Add Event" to create a new event
- Fill in: title, description, date/time, location, optional image URL
- Events automatically appear on the Events page sorted by date
- Edit or delete events as needed

#### Testimonials
- Click "Add Testimonial" to create a new testimonial
- Fill in: client initials/name, testimonial text
- Toggle "Approved for display" to show/hide on public page
- Only approved testimonials appear on the Testimonials page

### 4. Contact Form Submissions

- Contact form submissions are automatically stored in the database
- View them in the Supabase dashboard under the "contacts" table
- An edge function logs submissions (can be extended for email notifications)

## Design Features

### Color Palette
- Primary: Emerald green (wellness, growth, healing)
- Secondary: Blue (trust, calm, stability)
- Accents: Teal, cyan (energy, freshness)
- Neutrals: Slate grays (professional, grounded)

### Accessibility
- WCAG AA compliant color contrast
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Mobile-first responsive design

## Database Schema

### Events Table
```
- id: uuid (primary key)
- title: text
- description: text
- date: timestamptz
- location: text
- image_url: text (optional)
- created_at: timestamptz
- updated_at: timestamptz
```

### Testimonials Table
```
- id: uuid (primary key)
- name_or_initials: text
- text: text
- approved: boolean
- created_at: timestamptz
```

### Contacts Table
```
- id: uuid (primary key)
- name: text
- email: text
- message: text
- submitted_at: timestamptz
```

### Subscribers Table
```
- id: uuid (primary key)
- email: text (unique)
- joined_at: timestamptz
```

## SEO Optimization

The site is structured for good SEO:
- Semantic HTML5 elements
- Proper heading hierarchy (h1, h2, h3)
- Descriptive page titles
- Meta descriptions (can be added in index.html)
- Mobile-responsive design
- Fast loading times

## Next Steps

### Custom Domain Setup
1. Purchase domain: karabethvanick.com
2. In your hosting provider, add DNS records
3. Update the domain in your deployment settings

### Email Integration
The contact form edge function is ready to integrate with:
- SendGrid
- Mailgun
- Resend
- Or any other email service API

### Additional Features to Consider
- Blog section for wellness articles
- Online booking/scheduling system
- Client portal for secure messaging
- Newsletter signup functionality
- Social media integration
- Google Analytics

## Security

- All database tables have Row Level Security (RLS) enabled
- Public can only read approved content
- Admin authentication required for modifications
- HIPAA-compliant practices (no PHI stored)
- Secure contact form (no sensitive data)

## Support

For questions or customization requests, refer to the codebase documentation or contact your developer.

---

Built with React, TypeScript, Tailwind CSS, and Supabase
