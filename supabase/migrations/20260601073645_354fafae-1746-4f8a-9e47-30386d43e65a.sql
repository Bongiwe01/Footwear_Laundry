CREATE OR REPLACE FUNCTION public.set_booking_reference()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.reference IS NULL OR NEW.reference = '' THEN
    NEW.reference := 'FL-' || nextval('public.bookings_ref_seq')::TEXT;
  END IF;
  RETURN NEW;
END;
$$;