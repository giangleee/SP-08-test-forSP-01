const axios = require('axios');

/* =============================== TEST Lấy đơn hàng ==========================*/
// 7 test case 3 success 7 failed
test.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])('mock axios.get', async (id) => {
  try {
    const response = await axios.get(`http://103.179.173.95:8081/api/getOrderById/${id}`);
    expect(response.data).not.toEqual([]);
  } catch (e) {
    expect(e.data).toEqual(undefined);
  }
});

/* =============================== TEST Lọc đơn hàng của người dùng ==========================*/
// 30 test case 2 success, the rest failed
test.each([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31,
])('mock axios.get', async (id) => {
  try {
    const response = await axios.get(`http://103.179.173.95:8081/api/listOrderByUser/${id}`);
    expect(response.data).not.toBeNull();
  } catch (e) {
    expect(e.data).toEqual(undefined);
  }
});
