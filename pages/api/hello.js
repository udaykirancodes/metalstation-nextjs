// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { wlist } from '../Wishlist/wlist'

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(wlist)
  }
  else if(req.method ==='POST'){
    const list = req.body.list;
    const newList = {
      id: productId
    }
    wlist.push(newList);
    console.log(list);
    res.status(201).json(newList)
  }
}
