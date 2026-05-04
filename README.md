# Nazrawi Ethiopian Restaurant - Static Website

A single-page static website for Nazrawi Ethiopian Restaurant, located at 952 Sligo Ave, Silver Spring, MD 20910.

Built with plain HTML, CSS, and vanilla JavaScript. No frameworks or build tools required.

## Getting Started

### 1. Download Images

The images directory is empty by default. Run these commands from the `nazrawi-site` directory to download all images from the WordPress site:

```bash
mkdir -p assets/images

curl -L "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_HERO_2880x2304-scaled.jpg" -o assets/images/hero.jpg

curl -L "https://nazrawirestaurant.com/wp-content/uploads/2026/04/Nazrawi-White-scaled-300x133.png" -o assets/images/logo-white.png

curl -L "https://nazrawirestaurant.com/wp-content/uploads/2023/06/Transparent-02-300x133.png" -o assets/images/logo-dark.png

curl -L "https://nazrawirestaurant.com/wp-content/uploads/2026/04/page-0001.jpeg" -o assets/images/menu-page-1.jpg

curl -L "https://nazrawirestaurant.com/wp-content/uploads/2026/04/page-0002.jpeg" -o assets/images/menu-page-2.jpg

curl -L "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_NazwariFish_2880x2304-scaled.jpg" -o assets/images/gallery-fish.jpg

curl -L "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_Shiro_2880x2304-scaled.jpg" -o assets/images/gallery-shiro.jpg

curl -L "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_VeggieCombo_2880x2304-scaled.jpg" -o assets/images/gallery-veggie-combo.jpg

curl -L "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_SpecialKifto_2880x2304-scaled.jpg" -o assets/images/gallery-special-kifto.jpg

curl -L "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_FishCotelet_2880x2304-scaled.jpg" -o assets/images/gallery-fish-cotelet.jpg

curl -L "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_NazwariSpecialTibs_2880x2304-scaled.jpg" -o assets/images/gallery-special-tibs.jpg
```

Or using wget:

```bash
mkdir -p assets/images

wget -O assets/images/hero.jpg "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_HERO_2880x2304-scaled.jpg"

wget -O assets/images/logo-white.png "https://nazrawirestaurant.com/wp-content/uploads/2026/04/Nazrawi-White-scaled-300x133.png"

wget -O assets/images/logo-dark.png "https://nazrawirestaurant.com/wp-content/uploads/2023/06/Transparent-02-300x133.png"

wget -O assets/images/menu-page-1.jpg "https://nazrawirestaurant.com/wp-content/uploads/2026/04/page-0001.jpeg"

wget -O assets/images/menu-page-2.jpg "https://nazrawirestaurant.com/wp-content/uploads/2026/04/page-0002.jpeg"

wget -O assets/images/gallery-fish.jpg "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_NazwariFish_2880x2304-scaled.jpg"

wget -O assets/images/gallery-shiro.jpg "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_Shiro_2880x2304-scaled.jpg"

wget -O assets/images/gallery-veggie-combo.jpg "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_VeggieCombo_2880x2304-scaled.jpg"

wget -O assets/images/gallery-special-kifto.jpg "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_SpecialKifto_2880x2304-scaled.jpg"

wget -O assets/images/gallery-fish-cotelet.jpg "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_FishCotelet_2880x2304-scaled.jpg"

wget -O assets/images/gallery-special-tibs.jpg "https://nazrawirestaurant.com/wp-content/uploads/2026/04/NazwariEthiopianRestaurant_NazwariSpecialTibs_2880x2304-scaled.jpg"
```

### 2. Open the Site

Open `index.html` in a browser. No server required, but for best results use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## How to Update

### Update the Menu

Replace the menu images with new scans:

1. Save your new menu scans as `assets/images/menu-page-1.jpg` and `assets/images/menu-page-2.jpg`
2. Keep the same filenames so no HTML changes are needed
3. Recommended size: at least 1000px wide for readability

### Update Gallery Images

Replace any gallery image in `assets/images/`. The filenames used are:

- `gallery-fish.jpg`
- `gallery-shiro.jpg`
- `gallery-veggie-combo.jpg`
- `gallery-special-kifto.jpg`
- `gallery-fish-cotelet.jpg`
- `gallery-special-tibs.jpg`

To add or remove gallery slides, edit the `.carousel-slide` divs in `index.html` inside the `#carousel-track` element.

### Update Contact Info

Edit `index.html` and find the `#contact` section. You can change:

- **Address**: Update the text and the Google Maps "Get Direction" link
- **Hours**: Update the opening hours text
- **Phone**: Update the phone number and `tel:` link
- **Email**: Search for `info@nazrawirestaurant.com` and replace with your actual email (appears in the contact section and the Nazrawi Club mailto link)

### Update Social Links

Search `index.html` for `facebook.com` and `instagram.com` to find and update social media URLs. They appear in three places: the header, and the footer.

## File Structure

```
nazrawi-site/
  index.html              Main page
  assets/
    css/
      style.css            All styles
    js/
      script.js            Carousel, sticky header, mobile nav, smooth scroll
    images/
      hero.jpg             Hero background
      logo-white.png       White logo (header)
      logo-dark.png        Dark logo (footer)
      menu-page-1.jpg      Menu scan page 1
      menu-page-2.jpg      Menu scan page 2
      gallery-*.jpg        Gallery photos (6 images)
  README.md               This file
```
