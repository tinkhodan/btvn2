// Tạo một Set từ một mảng có các phần tử trùng lặp
let numberSet = new Set([1, 2, 3, 4, 5, 6]);

// Kiểm tra số phần tử trong Set (các phần tử trùng lặp sẽ bị loại bỏ)
console.log(numberSet.size); // 6

// Thêm một mảng khác vào Set
numberSet.add([7, 8]);

// Xóa một phần tử trong Set
numberSet.delete(2);

// Chuyển Set về mảng
let numberArray = [...numberSet];
console.log(numberArray); // [1, 3, 4, 5, 6, [7, 8]]

// Kiểm tra sự tồn tại của một phần tử
console.log(numberSet.has(3)); // true
console.log(numberSet.has(10)); // false
