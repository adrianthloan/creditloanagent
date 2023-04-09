import {data} from '../../../userData';

export function load({url}: any) {
  const id = url.searchParams.get('id')
  return {
    id,
    ...data[id],
  };
}