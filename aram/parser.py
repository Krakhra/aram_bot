# This parser takes all champions from text file and outputs a json file
import json

f = open("champions.txt","r")
lines = f.readlines()
champions_json = [
    {"champion":[]}
]

for line in lines:
    words = line.split()
    champion = words[0]
    champions_json[0]["champion"].append(champion)

# Pretty Print JSON
json_formatted_str = json.dumps(champions_json, indent=4)
print(json_formatted_str)

# Write pretty print JSON data to file
with open("champions.json", "w") as write_file:
    json.dump(champions_json, write_file, indent=4)