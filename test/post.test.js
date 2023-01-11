const axios = require('axios');

const baseDomain = 'http://103.179.173.95:8081/api/UpdateOrderStatus/';

/* =============================== TEST  cập nhập trạng thái đơn hàng ==========================*/
/* Status: PASSED and FAILED */
// 10 test case type POST, for id 1 to 3 success, 4 to 20 FAILED
test.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])('mock axios.post', async (id) => {
  try {
    const status = {
        newStatus: 'change status'
    }
    const response = await axios.post(`${baseDomain}/${id}`, status);
    const responseChangeStauts = await axios.get(`http://103.179.173.95:8081/api/listOrderByUser/${id}`);
    expect(response.data[0].status).toEqual(status.newStatus);
  } catch (e) {
    expect(e.data).toEqual(undefined)
  }
});
