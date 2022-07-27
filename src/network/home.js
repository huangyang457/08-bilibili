import { request } from "./request";

export function getSec1(){
  return request({
    url: '/img'
  })
}