/*
  # Karabeth Vanick Therapist Website Database Schema

  ## Overview
  Complete database schema for a therapist/coach website with events management,
  testimonials, contact form submissions, and newsletter subscribers.

  ## New Tables

  ### events
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Event name
  - `description` (text) - Detailed event description
  - `date` (timestamptz) - Event date and time
  - `location` (text) - Where the event takes place
  - `image_url` (text, optional) - URL to event image
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### testimonials
  - `id` (uuid, primary key) - Unique identifier
  - `name_or_initials` (text) - Client name or initials (anonymized)
  - `text` (text) - Testimonial content
  - `approved` (boolean) - Admin approval status
  - `created_at` (timestamptz) - Record creation timestamp

  ### contacts
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Sender name
  - `email` (text) - Sender email
  - `message` (text) - Message content
  - `submitted_at` (timestamptz) - Submission timestamp

  ### subscribers
  - `id` (uuid, primary key) - Unique identifier
  - `email` (text, unique) - Subscriber email
  - `joined_at` (timestamptz) - Subscription timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for approved testimonials and events
  - Authenticated admin access for all operations
  - Public insert for contacts and subscribers
*/

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date timestamptz NOT NULL,
  location text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_or_initials text NOT NULL,
  text text NOT NULL,
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  submitted_at timestamptz DEFAULT now()
);

-- Create subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  joined_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Events policies
CREATE POLICY "Public can view all events"
  ON events FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert events"
  ON events FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update events"
  ON events FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete events"
  ON events FOR DELETE
  TO authenticated
  USING (true);

-- Testimonials policies
CREATE POLICY "Public can view approved testimonials"
  ON testimonials FOR SELECT
  TO public
  USING (approved = true);

CREATE POLICY "Authenticated users can view all testimonials"
  ON testimonials FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

-- Contacts policies
CREATE POLICY "Public can submit contacts"
  ON contacts FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete contacts"
  ON contacts FOR DELETE
  TO authenticated
  USING (true);

-- Subscribers policies
CREATE POLICY "Public can subscribe"
  ON subscribers FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscribers"
  ON subscribers FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete subscribers"
  ON subscribers FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved);
CREATE INDEX IF NOT EXISTS idx_contacts_submitted_at ON contacts(submitted_at);
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);