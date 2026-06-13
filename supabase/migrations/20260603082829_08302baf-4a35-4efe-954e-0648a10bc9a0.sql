CREATE OR REPLACE FUNCTION public.create_booking(
  _customer_name text,
  _whatsapp text,
  _email text,
  _shoe_type text,
  _material text,
  _service_type text,
  _collection_date date,
  _collection_time text,
  _delivery_method text,
  _photo_urls text[],
  _notes text
)
RETURNS public.bookings
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_row public.bookings;
BEGIN
  INSERT INTO public.bookings (
    reference, customer_name, whatsapp, email, shoe_type, material,
    service_type, collection_date, collection_time, delivery_method,
    photo_urls, notes
  ) VALUES (
    '', _customer_name, _whatsapp, _email, _shoe_type, _material,
    _service_type, _collection_date, NULLIF(_collection_time, ''), _delivery_method,
    COALESCE(_photo_urls, '{}'), NULLIF(_notes, '')
  )
  RETURNING * INTO new_row;
  RETURN new_row;
END;
$$;

REVOKE ALL ON FUNCTION public.create_booking(text,text,text,text,text,text,date,text,text,text[],text) FROM public;
GRANT EXECUTE ON FUNCTION public.create_booking(text,text,text,text,text,text,date,text,text,text[],text) TO anon, authenticated;