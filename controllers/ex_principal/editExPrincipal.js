const { ObjectId } = require("mongodb");
const exPrincipalCollection = require("../../collections/ex_principal/ExPrincipalCollection");

const editExPrincipal = async (req, res) => {
  const p_id = req.params.id;
  const p_name = req.body.name;
  const p_phone_number = req.body.phone_number;
  const p_image_link = req.body.image_link;
  const p_designation = req.body.designation;
  const p_description = req.body.description;

  let result;

  console.log(
    p_id,
    p_name,
    p_phone_number,
    p_image_link,
    p_designation,
    p_description
  );

  const filter = { _id: new ObjectId(p_id) };
  const update = {
    $set: {
      name: p_name,
      phone_number: p_phone_number,
      image_link: p_image_link,
      designation: p_designation,
      description: p_description,
    },
  };

  result = await exPrincipalCollection.updateOne(filter, update);

  console.log(result);
  res.send(result);
};

module.exports = editExPrincipal;
