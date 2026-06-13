import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  title?: string;
}

const Logo = ({ className, title = "Footwear Laundry" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 600 220"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Frame line:
          - left vertical overlaps the top of the F (seamless contact)
          - top + right + bottom horizontal as one continuous polyline
          - ends exactly at the right edge of the Y in LAUNDRY
          textLength locks the rendered width of each word so the polyline
          endpoints stay aligned regardless of font loading state. The bottom
          line overlaps the Y glyph enough to remove any visible break. */}
      <polyline
        points="26,44 26,18 378,18 378,192 240,192"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <text
        x="20"
        y="95"
        fill="currentColor"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="78"
        letterSpacing="4"
        textLength="300"
        lengthAdjust="spacingAndGlyphs"
      >
        FOOTWEAR
      </text>
      <text
        x="20"
        y="192"
        fill="currentColor"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="78"
        letterSpacing="4"
        textLength="240"
        lengthAdjust="spacingAndGlyphs"
      >
        LAUNDRY
      </text>
    </svg>
  );
};

export default Logo;