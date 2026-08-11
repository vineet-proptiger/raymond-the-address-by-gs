import os

directories_to_scan = ['app', 'components', 'lib']

replacements = {
    "Raymond City Wadala The Highlands": "Raymond The Address By GS",
    "Raymond City Wadala": "Raymond The Address By GS",
    "Raymond%20City%20Wadala%20The%20Highlands": "Raymond%20The%20Address%20By%20GS",
    "Raymond%20City%20Wadala": "Raymond%20The%20Address%20By%20GS",
}

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
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
