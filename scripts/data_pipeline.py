import json
import os
import sys

def process_geojson(input_path, output_path):
    print(f"Loading {input_path}...")
    with open(input_path, 'r') as f:
        data = json.load(f)
    
    # Strip heavy properties to optimize for MetaScreenX rendering
    for feature in data.get('features', []):
        if 'properties' in feature:
            feature['properties'] = {k: v for k, v in feature['properties'].items() if k in ['id', 'name', 'type']}

    with open(output_path, 'w') as f:
        json.dump(data, f)
    print(f"Optimized payload written to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) == 3:
        process_geojson(sys.argv[1], sys.argv[2])
    else:
        print("Usage: python data_pipeline.py <input.geojson> <output.json>")
