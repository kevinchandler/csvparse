# Parse all CSV files in directory (argv[2])
# write to data.csv
# example usage: ruby parse_dir.ruby ./data-pull

directory = ARGV[0]
abort 'Directory not given' unless directory

file_names = Dir["#{directory}/*.csv"]
csv_arr = []

file_names.each do |file_name|
  file = File.open file_name, 'r'
  csv_arr << [file.gets]
end

f = File.new 'data.csv', 'w'
f.puts csv_arr
f.close
