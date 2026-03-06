/*
  # Create Udaan - The Endless Journey Members Table

  1. New Tables
    - `members`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `cuid` (text)
      - `contact_number` (text)
      - `email` (text)
      - `program` (text)
      - `father_name` (text)
      - `year_semester` (text)
      - `father_contact_number` (text)
      - `emergency_contact_number` (text)
      - `date_of_birth` (date)
      - `gender` (text)
      - `blood_group` (text)
      - `permanent_address` (text)
      - `correspondence_address` (text)
      - `photograph_url` (text)
      - `hobbies` (text)
      - `interest_area` (text)
      - `registration_date` (date)
      - `university_id_card_url` (text)
      - `aadhar_card_url` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `members` table
    - Add policy for public insert (registration is open to all)
    - Add policy for authenticated users to read all members
*/

CREATE TABLE IF NOT EXISTS members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  cuid text NOT NULL,
  contact_number text NOT NULL,
  email text NOT NULL,
  program text NOT NULL,
  father_name text NOT NULL,
  year_semester text NOT NULL,
  father_contact_number text NOT NULL,
  emergency_contact_number text NOT NULL,
  date_of_birth date NOT NULL,
  gender text NOT NULL,
  blood_group text NOT NULL,
  permanent_address text NOT NULL,
  correspondence_address text NOT NULL,
  photograph_url text,
  hobbies text,
  interest_area text,
  registration_date date NOT NULL,
  university_id_card_url text,
  aadhar_card_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register as member"
  ON members
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all members"
  ON members
  FOR SELECT
  TO authenticated
  USING (true);
