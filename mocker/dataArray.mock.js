let myInvoice = [
  {
    id: '1',
    purchaserName: '张三',
    invoiceCode: '033091700117',
    invoiceNo: '86900687',
    price: '3000.00',
    applyTime: '2020-05-06 14:01:11',
    makeTime: '2020-05-06 14:01:11',
    courierName: '顺丰快递',
    courierNo: '123456789',
  },
  {
    id: '2',
    purchaserName: '张三',
    invoiceCode: '033091700117',
    invoiceNo: '86900687',
    price: '3000.00',
    applyTime: '2020-05-06 14:01:11',
    makeTime: '2020-05-06 14:01:11',
    courierName: '圆通快递',
    courierNo: '123456789',
  },
  {
    id: '3',
    purchaserName: '张三',
    invoiceCode: '033091700117',
    invoiceNo: '86900687',
    price: '3000.00',
    applyTime: '2020-05-06 14:01:11',
    makeTime: '2020-05-06 14:01:11',
    courierName: '京东快递',
    courierNo: '123456789',
  },
  {
    id: '4',
    purchaserName: '张三',
    invoiceCode: '033091700117',
    invoiceNo: '86900687',
    price: '3000.00',
    applyTime: '2020-05-06 14:01:11',
    makeTime: '2020-05-06 14:01:11',
    courierName: '京东快递',
    courierNo: '123456789',
  },
  {
    id: '5',
    purchaserName: '张三',
    invoiceCode: '033091700117',
    invoiceNo: '86900687',
    price: '3000.00',
    applyTime: '2020-05-06 14:01:11',
    makeTime: '2020-05-06 14:01:11',
    courierName: '圆通快递',
    courierNo: '123456789',
  },
];
//请求成功
module.exports = {
  'POST /api/pipeline/list': (req, res) => {
    return res.send({
      code: 1,
      message: '请求成功',
      data: {
        total: 3,
        rows: myInvoice,
      },
      token: null,
    });
  },
};