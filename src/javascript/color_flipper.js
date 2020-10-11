const hexBackground = ["8B0000", "B22222", "DC143C", "CD5C5C", "800000", "A52A2A", "A0522D",
					   "8B4513", "000000", "2F4F4F", "C71585", "DB7093", "FF1493", "4B0082",
					   "800080", "8B008B", "9932CC", "9400D3", "8A2BE2", "9370DB", "BA55D3",
					   "483D8B", "6A5ACD", "7B68EE", "191970", "000080", "00008B", "0000CD",
					   "0000FF", "4169E1", "4682B4", "008080", "008B8B", "5F9EA0", "20B2AA",
					   "6B8E23", "556B2F", "808000", "2E8B57", "3CB371", "8FBC8F", "006400",
					   "008000", "334D31", "228B22", "FFA07A", "FA8072", "FFD700", "FFA500",
					   "FFFFE0", "FFFACD", "FAFAD2", "FFEFD5", "FFE4B5", "FFDAB9", "EEE8AA",
					   "F0E68C", "7CFC00", "FFFF00", "7FFF00", "00FF00", "98FB98", "90EE90",
					   "00FA9A", "00FF7F", "ADFF2F", "E0FFFF", "00FFFF", "00FFFF", "7FFFD4",
					   "AFEEEE", "40E0D0", "B0E0E6", "ADD8E6", "87CEFA", "87CEEB", "B0C4DE",
					   "00BFFF", "E6E6FA", "D8BFD8", "DDA0DD", "EE82EE", "FFC0CB", "FFB6C1",
					   "FFFFFF", "FFFAFA", "F0FFF0", "F5FFFA", "F0FFFF", "F0F8FF", "F8F8FF",
					   "F5F5F5", "FFF5EE", "F5F5DC", "FDF5E6", "FFFAF0", "FFFFF0", "FAEBD7",
					   "FAF0E6", "FFF0F5", "FFE4E1", "DCDCDC", "FFF8DC", "FFEBCD", "FFE4C4",
					   "FFDEAD", "F5DEB3", "FF8C00"];
const hexText       = ["FFECE4", "FFECE4", "FFECE4", "FFECE4", "FFECE4", "FFFFFF", "FFFFFF",
	                   "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF",
	                   "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF",
	                   "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF",
	                   "FFFFFF", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF",
	                   "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF",
	                   "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "000000", "000000", "000000",
	                   "000000", "000000", "000000", "000000", "000000", "000000", "000000",
	                   "000000", "000000", "000000", "000000", "000000", "000000", "000000",
	                   "000000", "000000", "000000", "000000", "000000", "000000", "000000",
	                   "000000", "000000", "000000", "000000", "000000", "000000", "000000",
	                   "000000", "000000", "000000", "000000", "000000", "000000", "000000",
	                   "000000", "000000", "000000", "000000", "000000", "000000", "000000",
	                   "000000", "000000", "000000", "000000", "000000", "000000", "000000",
	                   "000000", "000000", "000000", "000000", "000000", "000000", "000000",
	                   "000000", "000000", "000000"];
	                   
const fork = document.querySelector('.fork');

setInterval(function() {
    let hexColorBackground = "#";
    let hexColorText = "#";
    let index = getRandomNumber();
    hexColorBackground += hexBackground[index];
	hexColorText += hexText[index];
    
    fork.style.color = hexColorText;	
    fork.style.backgroundColor = hexColorBackground;
}, 1500);

function getRandomNumber() {
    return Math.floor(Math.random() * hexBackground.length);
}