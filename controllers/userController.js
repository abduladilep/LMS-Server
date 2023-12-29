const UserModel=require('../model/UserModel')

module.exports.getStudent__controller=async (req,res,next)=>{
    try {
        const studentInfo=await UserModel.find({role:"Student"})
        return res.status(200).json({
            studentInfo
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error: "Error occurred"
        })
    }
}


module.exports.getTeacher__controller=async (req,res,next)=>{
    try {
        const teacherInfo=await UserModel.find({role:"Teacher"})
        return res.status(200).json({
            teacherInfo
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error: "Error occurred"
        })
    }
}

module.exports.getuser__controller=async (req,res,next)=>{
    try {
        const userInfo=await UserModel.find({role:'Student'})
        return res.status(200).json({
            userInfo
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error: "Error occurred"
        })
    }
}




module.exports.deleteTeacher__controller = async (req, res, next) => {
    try {
        console.log("deleteing use",req.params.id);

      const { userId } = req.params.id;
      const user = await UserModel.findOneAndDelete({ _id: userId });
      console.log(user,"deleted");
      return res.status(200).json({
        user,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
  };