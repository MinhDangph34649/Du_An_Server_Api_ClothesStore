const Bill = require('../models/Bill');

//viết api để xóa nhà phân phối theo id
router.delete("/delete-bill-by-id/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Bill.findByIdAndDelete(id);
      if (result) {
        res.json({
          status: 200,
          messenger: "tìm và xóa theo id thành công",
          data: result,
        });
      } else {
        res.json({
          status: 400,
          messenger: "tìm và xóa thất bại",
          data: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  });

router.get("/", (rq, rs) => {
    rs.send("Vao API Bill");
  });
  
  // Lấy danh sách các sản phẩm giày
  router.get("/get-list-bill", async (req, res) => {
    try {
      const data = await Bill.find();
      console.log(data)
      res.json(data); // Trả về dữ liệu dưới dạng JSON
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 500, 
        messenger: "Internal Server Error",
        data: [],
      });
    }
  });

router.post("/add-bill", async (req, res) => {
    try {
        const data = req.body;
        const newBill = new Bill({
            userId:data.userId,
            orderId:data.orderId,
            paymentdate:data.paymentdate,
            status:data.status,
            totalamount:data.totalamount,
        
        });
        const result = await newBill.save();
        if (result) {
            res.json({
                status: 200,
                messenger: "insert thanh công",
                data: result,
            });
        } else {
            res.json({
                status: 400,
                messenger: "thêm không thành công",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
    }
});
