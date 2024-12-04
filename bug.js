```javascript
//Incorrect aggregation pipeline causing unexpected results
aggregate([{
    $match: { "fieldName": "value" }
  }, {
    $group: { _id: "$fieldName", count: { $sum: 1 } }
  }, {
    $sort: { count: -1 }
  }, {
    $limit: 10
  }
])
```