module.exports = (mongoose) => {
  const Members = mongoose.model(
    "Members",
    mongoose.Schema(
      {
        name: String,
        description: String,
        position: String,
        imageUrl: String,
      },
      { timestamps: true }
    )
  );

  return Members;
};
