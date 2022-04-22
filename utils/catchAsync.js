// eslint-disable-next-line arrow-body-style
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next); // next equivalent to (err => next(err))
  };
};
// return (req, res, next) => {} to assign to method in controller, express is then gonna call
