import urllib.request
import time
import os

planet_urls = {
    "mercury.jpg": "https://nssdc.gsfc.nasa.gov/planetary/image/mercury_messenger.jpg",
    "venus.jpg": "https://nssdc.gsfc.nasa.gov/planetary/image/venus.jpg",
    "earth.jpg": "https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57723/globe_west_2048.jpg",
    "mars.jpg": "https://nssdc.gsfc.nasa.gov/planetary/image/mars_viking.jpg",
    "jupiter.jpg": "https://nssdc.gsfc.nasa.gov/planetary/image/jupiter.jpg",
    "saturn.jpg": "https://nssdc.gsfc.nasa.gov/planetary/image/saturn.jpg",
    "uranus.jpg": "https://nssdc.gsfc.nasa.gov/planetary/image/uranus.jpg",
    "neptune.jpg": "https://nssdc.gsfc.nasa.gov/planetary/image/neptune.jpg"
}

if not os.path.exists("images"):
    os.makedirs("images")

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for filename, url in planet_urls.items():
    try:
        print(f"Downloading {filename}...")
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as response:
            data = response.read()
            filepath = os.path.join("images", filename)
            with open(filepath, 'wb') as f:
                f.write(data)
            print(f"✓ Successfully downloaded {filename} ({len(data)} bytes)")
        time.sleep(1)
    except Exception as e:
        print(f"✗ Failed to download {filename}: {e}")

print("\nDownload complete!")
