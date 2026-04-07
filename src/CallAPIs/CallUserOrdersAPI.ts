import fun from '@/utils/fun';
import {jwtDecode} from "jwt-decode"
interface JwtPayload {
  id: string;  // أو أي نوع آخر بناءً على بياناتك
  // بقية الخصائص إذا كانت موجودة
}

export default async function CallUserOrdersAPI() {
  const token = await fun()
  const { id } = jwtDecode<JwtPayload>(token);

    console.log("decoded",id);
    

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
    const data = await res.json()
    console.log("dataaaaa" , data);
    



  return data
}
