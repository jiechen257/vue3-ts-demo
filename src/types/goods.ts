import type { IPage } from './page'
export interface IGoods {
  userId: number,
  id: number,
  title: string,
  introduce: string
}

export interface IQueryGoods extends IGoods, IPage {

}

export class GoodsPages {
  selected_data: IQueryGoods = {
    userId: 0,
    id: 0,
    title: "",
    introduce: "",
    current_page: 1,
    data_count: 0,
    single_page_size: 5
  }

  goods_list: IGoods[] = []
}