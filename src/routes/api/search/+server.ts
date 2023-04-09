import {json} from "@sveltejs/kit";
import {data} from "../../../userData";

export const GET = (({url}: any): any => {
  const id: string = url.searchParams.get('id')
  return json(data[id] ? data[id] : null);
})
