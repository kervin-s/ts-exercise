// a 标签
// const aLink = document.getElementById('link')

// 类型断言
// 推荐：
const aLink = document.getElementById('link') as HTMLAnchorElement

// const aLink = <HTMLAnchorElement>document.getElementById('link')

aLink.href

// --

// 其他示例：

// 假设，这个变量表示 经纬度坐标
let position = [31, 114] as [number, number]
