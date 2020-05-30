// 定义返回data类型
export interface Data {
  id: number;
  showimg: string;
  href: string;
  position: string;
}

export interface BasicListProductData {
  res: number;
  msg?: string;
  data: Data[]
}
