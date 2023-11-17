class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['sort', 'page', 'limit', 'fields'];

    excludedFields.forEach((e) => delete queryObj[e]);
    let queryStr = JSON.stringify(queryObj);
    queryStrg = queryStrg.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );

    this.query = this.query.find(queryStr);
  }
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else this.query = this.query.sort('-createdAt');
  }
  fields() {
    if (this.queryString.select) {
      const selectBy = this.queryString.select.split(',').join(' ');
      this.query = this.query.select(selectBy);
    } else this.query = this.query.select('-__v');
  }
  limit() {
    const page = this.queryString * 1;
    const limit = this.queryString * 1;

    skip = limit * (page - 1);

    this.query = this.query.skip(skip).limit(limit);
  }
}

module.exports = ApiFeatures;
