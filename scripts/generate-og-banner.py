from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


WIDTH = 1200
HEIGHT = 627
BACKGROUND = "#0B1220"
TEXT = "#F8FAFC"
MUTED = "#CBD5E1"
ACCENT = "#67E8F9"
OUTPUT = Path(__file__).resolve().parents[1] / "public" / "og-banner.png"


def find_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    windows_font = Path("C:/Windows/Fonts")
    candidates = (
        ["segoeuib.ttf", "arialbd.ttf", "DejaVuSans-Bold.ttf"]
        if bold
        else ["segoeui.ttf", "arial.ttf", "DejaVuSans.ttf"]
    )
    for candidate in candidates:
        for root in (windows_font, Path("/usr/share/fonts/truetype/dejavu")):
            font_path = root / candidate
            if font_path.exists():
                return ImageFont.truetype(str(font_path), size)
    return ImageFont.load_default()


def main() -> None:
    image = Image.new("RGB", (WIDTH, HEIGHT), BACKGROUND)
    draw = ImageDraw.Draw(image)

    margin = 72
    draw.line((margin, margin, WIDTH - margin, margin), fill="#1E293B", width=2)
    draw.line((margin, HEIGHT - margin, WIDTH - margin, HEIGHT - margin), fill="#1E293B", width=2)
    draw.rectangle((margin, margin, margin + 10, HEIGHT - margin), fill=ACCENT)

    draw.text((margin + 42, 158), "OSKAR ORTIZ", fill=TEXT, font=find_font(76, bold=True))
    draw.text(
        (margin + 46, 270),
        "Backend · Cloud AWS · DevOps",
        fill=ACCENT,
        font=find_font(38, bold=True),
    )
    draw.text(
        (margin + 46, 388),
        "Java · Spring Boot · FastAPI · AWS · Docker · Terraform",
        fill=MUTED,
        font=find_font(25),
    )
    draw.text(
        (margin + 46, 430),
        "Prometheus · Grafana",
        fill=MUTED,
        font=find_font(25),
    )

    image.save(OUTPUT, format="PNG", optimize=True)
    print(f"Generated {OUTPUT} ({image.width}x{image.height})")


if __name__ == "__main__":
    main()
