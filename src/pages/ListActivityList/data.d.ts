// 定义返回data类型
export interface Data {
  id: number;
  type: string;
  showimg: string;
  wximg: string;
  h5img: string;
  des: string;
  href: string;
  position: number;
  state: string;
  online: string
}

export interface BasicListProductData {
  res: number;
  msg?: string;
  data: Data[]
}
