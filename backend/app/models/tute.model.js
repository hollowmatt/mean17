const { mongoose } = require(".");

module.exports = mongoose => {
  const Tute = mongoose.model(
    "tute",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true}
    )
  );
  return Tute;
};