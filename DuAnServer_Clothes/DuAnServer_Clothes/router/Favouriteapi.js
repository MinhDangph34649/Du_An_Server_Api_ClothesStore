var express = require("express");
var router = express.Router();

const Favourite = require("../model/Favourite");

router.get("/", (rq, rs) => {
  rs.send("Vao API Favourite");
});

// Lấy danh sách các sản phẩm giày
router.get("/get-list-Favourite", async (req, res) => {
  try {
    const data = await Favourite.find();
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


router.post("/add-favourite", async (req, res) => {
    try {
        const data = req.body;
        const newFavourite = new Favourite({
            userId:data.userId,
            productId:data.productId,
        
        });
        const result = await newFavourite.save();
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


//viết api để xóa nhà phân phối theo id
router.delete("/delete-favourite-by-id/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Favourite.findByIdAndDelete(id);
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


module.exports = router;

