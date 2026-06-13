CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reference TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  shoe_type TEXT NOT NULL,
  material TEXT NOT NULL,
  service_type TEXT NOT NULL,
  collection_date DATE NOT NULL,
  collection_time TEXT,
  delivery_method TEXT NOT NULL DEFAULT 'pickup',
  photo_urls TEXT[] NOT NULL DEFAULT '{}',
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.bookings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.bookings TO authenticated;
GRANT ALL ON public.bookings TO service_role;

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON public.bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view bookings"
  ON public.bookings FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update bookings"
  ON public.bookings FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Generate human-friendly FL-#### references
CREATE SEQUENCE IF NOT EXISTS public.bookings_ref_seq START 1001;
GRANT USAGE ON SEQUENCE public.bookings_ref_seq TO anon, authenticated, service_role;

CREATE OR REPLACE FUNCTION public.set_booking_reference()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.reference IS NULL OR NEW.reference = '' THEN
    NEW.reference := 'FL-' || nextval('public.bookings_ref_seq')::TEXT;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_booking_reference_trigger
  BEFORE INSERT ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.set_booking_reference();