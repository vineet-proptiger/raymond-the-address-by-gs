import os
import re

directories_to_scan = [
    'app',
    'components',
    'lib',
]
files_to_scan = ['package.json']

replacements = {
    "Godrej City Panvel The Highlands": "Raymond The Address By GS",
    "Godrej Highlands Panvel": "Raymond The Address By GS",
    "Godrej City The Highlands": "Raymond The Address By GS",
    "Godrej The Highlands": "Raymond The Address By GS",
    "Godrej City Panvel": "Raymond The Address By GS",
    "Godrej City": "Raymond The Address By GS",
    "Godrej Properties": "Raymond Realty",
    "Godrej": "Raymond",
    "godrejcitypanvelhighlands.com": "raymondtheaddressbygsmumbai.com",
    "godrejcityhighlands.com": "raymondtheaddressbygsmumbai.com",
    "godrej-highlands": "raymond-the-address-by-gs",
    "Navi Mumbai": "Mumbai",
    "Panvel, Navi Mumbai": "Wadala, Mumbai",
    "Panvel": "Wadala",
    "Hi%2C%20I%20am%20interested%20in%20Godrej%20City%20Panvel%20The%20Highlands": "Hi%2C%20I%20am%20interested%20in%20Raymond%20The%20Address%20By%20GS",
}

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    original_content = content
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for d in directories_to_scan:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith(('.js', '.jsx', '.css', '.json')):
                process_file(os.path.join(root, file))

for f in files_to_scan:
    if os.path.exists(f):
        process_file(f)

print("Done.")
