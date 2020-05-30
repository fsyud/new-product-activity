// 定义返回data类型
export interface Data {
  id: number;
  type: string;
  showimg: string;
  online: string;
  position: number;
  title: string;
  link1: string;
  link1href: string;
  link2: string;
  link2href: string;
  link3: string;
  link3href: string;
}

export interface BasicListProductData {
  res: number;
  msg?: string;
  data: Data[]
}
