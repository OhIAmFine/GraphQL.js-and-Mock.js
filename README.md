# GraphQL本地查询mock数据demo #
##### 利用graphql单次查询mock.js模拟的静态数据

##### 通过js动态渲染查询结果

##### 生成一系列数据

##### 分享者和被分享者数据的内容分开


## 目录结构



─work

  ├─css
  
  ├─dist
  
  ├─js 
  
  └─node_modules
  
     ├─. bin
    
     ├─ @types
    
     │  ├─ express



# GraphQL和其他API查询设计的优劣

- GraphQL 定义了一套严谨的查询语言。REST API 在此毫无建树，基本上 API 的 querystring / body 没有太多章法可循，大家随遇而安。由此，GraphQL 可以很容易地通过类型系统和用户定义的 schema 生成强大的验证工具，保证 query 是正确的，且满足服务器的能力。
- 使用 GraphQL 并不意味着能提高 API 效率。
GraphQL 只定义了 API 的 UI 部分，是否比 REST API 高效取决于实现的方式。事实上，不经优化 的 GraphQL API 的性能一般会比 REST API 低。因为 GraphQL 每个 field 单独 resolve，很容易出现 N+1 query。nodejs 的 GraphQL 实现考虑了这个问题，提供了 loader 允许更高效的查询方式。所以，在 resolve 的时候，一定要合理地使用 loader。
- GraphQL 的强大灵活的查询能力虽然让人大流口水，但隐含着很多安全上和性能上的问题。
- 旧有的缓存机制可能会失效
- 用 GraphQL 可能会增加实现的复杂度
