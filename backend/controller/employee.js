import User from "../models/user.schema.js";

export const getUser = async (req, res) => {
  try {
    const {query=""} = req.query
    const user = await User.find({
      $or:[
        {fullname: {$regex:query , $options:"i" } },
        {department:{$regex:query,$options:"i"}}
      ]
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: true });
  }
};
export const createUser = async (req, res) => {
  try {
    const { fullname, email, department, role } = req.body;
    console.log(req.body)
    const user = await User.findOne({ email });
    if (user) throw new Error("User already exist");

    const newUser = await User.create({
      fullname,
      email,
      role,
      department,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");
    await User.deleteOne({_id:id})
    res.status(201).json({ message: "user deleted succesfully" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const updateuser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        fullname: req.body.fullname,
        email: req.body.email,
        role: req.body.role,
        department: req.body.department,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const getSingleEmployee = async(req,res)=>{
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    if(!user) return res.status(401).json({error:"User not found"});
    res.status(200).json(user)
  } catch (error) {
     res.status(401).json({error})
  }
}