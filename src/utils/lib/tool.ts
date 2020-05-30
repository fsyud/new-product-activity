// 上传文件转换
export function getBase64(file: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// 文件格式验证
export function JudgeImg(file: any, sta?: boolean): any {
  let midStorage: any;
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  const isLt2M = file.size / 1024 / 1024 < 2;
  if(!isJpgOrPng)  midStorage = '1'
  if(!isLt2M) midStorage = '2'
  if(sta && (midStorage === '1' || midStorage === '2')) midStorage = false
  return midStorage;
}