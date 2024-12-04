```javascript
//Corrected aggregation pipeline
aggregate([
  {
    $match: { "fieldName": { $exists: true, $eq: "value" } }
  }, 
  {
    $group: { _id: "$fieldName", count: { $sum: 1 } }
  }, 
  {
    $sort: { count: -1 }
  }, 
  {
    $limit: 10
  }
])
```