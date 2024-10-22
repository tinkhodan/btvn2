// Tạo một Map để lưu trữ thông tin về học sinh (studentID -> tên học sinh)
let studentMap = new Map([
    [101, "LOL"],
    [102, "FO4"],
    [103, "VALORANT"]
]);

// Thêm một cặp key-value mới vào Map
studentMap.set(104, "PUBG");

// Lấy giá trị tương ứng với key
console.log(studentMap.get(102)); // Bob

// Kiểm tra số phần tử trong Map
console.log(studentMap.size); // 4

// Kiểm tra xem Map có chứa một key không
console.log(studentMap.has(105)); // false

// Xóa một cặp key-value khỏi Map
studentMap.delete(101);

// Duyệt qua các cặp key-value trong Map
for (let [studentID, name] of studentMap) {
    console.log(`ID: ${studentID}, Name: ${name}`);
}

// Kết quả của Map sau các thao tác
console.log(studentMap); // Map { 102 => 'Bob', 103 => 'Charlie', 104 => 'David' }
