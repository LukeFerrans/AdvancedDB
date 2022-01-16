exports.list = async (req, res) => {
    const perPage = 10;
    const limit = parseInt(req.query.limit) || 10; // Make sure to parse the limit to number
    const page = parseInt(req.query.page) || 1;
    const message = req.query.message;
  
  
    try {
      const directorates = await Directorate.find({}).skip((perPage * page) - perPage).limit(limit);
      const count = await Directorate.find({}).count();
      const numberOfPages = Math.ceil(count / perPage);
  
      res.render("directorates", {
        directorates: directorates,
        numberOfPages: numberOfPages,
        currentPage: page,
        message: message
      });
    } catch (e) {
      res.status(404).send({ message: "could not list directorates" });
    }
  };