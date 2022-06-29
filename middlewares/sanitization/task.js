const rules = {
    titleTrim: (req, res, next) => {
      let { title } = req.body;
      title = title ? title.trim() : undefined;
      req.body.title = title;
      next();
    },
    descTrim: (req, res, next) => {
      let { desc } = req.body;
  
      desc = desc ? desc.trim() : undefined;
      req.body.desc = desc;
      next();
    },
  };
  const sanitize = {
    addOne: [rules.titleTrim, rules.descTrim],
    updateOne: [rules.titleTrim, rules.descTrim],
  };
  
  module.exports = sanitize;