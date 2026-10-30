from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


WIDTH = 1584
HEIGHT = 396
BACKGROUND = "#08111F"
TEXT = "#F8FAFC"
MUTED = "#B8C7D9"
ACCENT = "#67E8F9"
GRID = "#16304A"
OUTPUT = Path(__file__).resolve().parents[1] / "public" / "linkedin-banner.png"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    root = Path("C:/Windows/Fonts")
    names = ("segoeuib.ttf", "arialbd.ttf") if bold else ("segoeui.ttf", "arial.ttf")
    for name in names:
        path = root / name
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def main() -> None:
    image = Image.new("RGB", (WIDTH, HEIGHT), BACKGROUND)
    draw = ImageDraw.Draw(image)

    for x in range(0, WIDTH, 72):
        draw.line((x, 0, x, HEIGHT), fill=GRID, width=1)
    for y in range(0, HEIGHT, 56):
        draw.line((0, y, WIDTH, y), fill=GRID, width=1)

    nodes = [(1080, 74), (1240, 150), (1080, 246), (1370, 286), (1490, 126)]
    links = [(1080, 74, 1240, 150), (1240, 150, 1080, 246), (1240, 150, 1370, 286), (1080, 74, 1490, 126)]
    for x1, y1, x2, y2 in links:
        draw.line((x1, y1, x2, y2), fill="#245070", width=3)
    for x, y in nodes:
        draw.ellipse((x - 12, y - 12, x + 12, y + 12), fill=ACCENT, outline=TEXT, width=2)

    draw.rectangle((72, 62, 82, HEIGHT - 62), fill=ACCENT)
    draw.text((118, 108), "Backend · AWS · DevOps", fill=TEXT, font=font(54, bold=True))
    draw.text((122, 188), "Java · Spring Boot · FastAPI · AWS · Docker · Terraform", fill=ACCENT, font=font(25, bold=True))
    draw.text((122, 236), "REST APIs · Microservices · Observability", fill=MUTED, font=font(23))
    draw.text((122, 306), "OSKAR ORTIZ", fill=MUTED, font=font(20, bold=True))

    image.save(OUTPUT, format="PNG", optimize=True)
    print(f"Generated {OUTPUT} ({WIDTH}x{HEIGHT})")


if __name__ == "__main__":
    main()
