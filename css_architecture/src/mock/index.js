// mock数据线上RAP2
import Mock from 'mockjs';

Mock.setup({
  timeout: '300-600'
})

Mock.mock('/api/user','get',getUser);

function getUser(param) {
  return Mock.mock({
    data:{
      "data":{
        "name": "@cname",
        "phone|11": "@integer(0,9)",
        "city": "@city"
      },
      "status":"200",
      "msg": 200
    }
  })
}