GRANT INSERT ON public.bookings TO anon, authenticated;
GRANT SELECT, UPDATE ON public.bookings TO authenticated;
GRANT ALL ON public.bookings TO service_role;
GRANT USAGE ON SEQUENCE public.bookings_ref_seq TO anon, authenticated, service_role;

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;